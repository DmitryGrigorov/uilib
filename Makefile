.PHONY: all lint
.DEFAULT_GOAL: all
BUILDID=$(shell date +%Y%m%d-%H:%M:%S)
COMPONENTS_VERSION=$(shell grep '"version":' src/components/package.json | cut -d\" -f4)
ICONS_VERSION=$(shell grep '"version":' src/icons/package.json | cut -d\" -f4)
DOTFILES_VERSION=$(shell grep '"version":' packages/dotfiles/package.json | cut -d\" -f4)
BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

image ?= ghcr.io/dmitrygrigorov/uilib:1.0.0
gr = gitlab-runner exec shell
dc = docker-compose
d = docker

up:
	$(dc) up -d
all:
	npm start
ci.local:
	git commit -am 'test' || true
	$(gr) lint

# ------------------------CORE--------------------------
# shortcut for deleting
delete_folders:
	rm -rf ./publish-components;\
	rm -rf ./publish-new-components;\
	rm -rf ./publish-icons;\

# Copying files with saved structure
# Copying package.json
move_package_core:
	cp ./src/components/package.json ./publish-components/;\
	cp ./src/components/README.md ./publish-components/;\

# Copy assets
copy_assets:
	cp -R ./src/assets ./publish-components/;\
# TODO: remove after the redesign
	cp -R ./src/assets ./publish-components/esm;\
	cp -R ./src/assets ./publish-components/umd;\

# Copy styles
copy_styles:
	cp -R ./src/styles ./publish-components/;\

# All steps for successful build
# 1. Removing already used files which became unuseful
# 2. creating ./publish_components
# 3. creating structure for components
# 4. removing lib after build to avoid duplicate after build
steps_compoments:
	make move_package_core;\
	make copy_assets;\
	make copy_styles;\

steps_for_new_compoments:
	make move_package_components;\
	make new_copy_assets;\

build_components:
	make delete_folders;\
	npm run tsc:components || exit 1;\
	make steps_compoments;\

# ------------------------COMPONENTS--------------------------
create_core_tag:
	git tag @quark-uilib/components@$(COMPONENTS_VERSION); \


publish_components:
	make delete_folders;\
	npm run tsc:components;\
	npm run prettier:write;\
	npm run patch;\
	make steps_compoments;\
	git add .; \
	git commit --no-verify -m 'Automatic commit of successful build $(BUILDID)'; \
	make create_core_tag; \
	git push; \
	npm run publish; \

publish_components_patch:
ifeq ($(BRANCH), dev)
	make publish_components
else
	$(error You can only post Prerelease in this branch)
endif

publish_components_major:
ifeq ($(BRANCH), dev)
	make delete_folders;\
	npm run tsc:components;\
	npm run prettier:write;\
	npm run major;\
	make steps_compoments;\
	git add .; \
	git commit --no-verify -m 'Automatic commit of successful build $(BUILDID)'; \
	make create_core_tag; \
	git push; \
	npm run publish
else
	$(error You can only post Prerelease in this branch)
endif

publish_components_minor:
ifeq ($(BRANCH), dev)
	make delete_folders;\
	npm run tsc:components;\
	npm run prettier:write;\
	npm run minor;\
	make steps_compoments;\
	git add .; \
	git commit --no-verify -m 'Automatic commit of successful build $(BUILDID)'; \
	make create_core_tag; \
	git push; \
	npm run publish
else
	$(error You can only post Prerelease in this branch)
endif


publish_components_prerelease:
ifeq ($(BRANCH), dev)
	$(error You can only post patch, minor and major in this branch)
else
	make delete_folders;\
	npm run tsc:components;\
	npm run prettier:write;\
	npm run prerelease;\
	make steps_compoments;\
	git add .; \
	git commit --no-verify -m 'Automatic commit of successful build $(BUILDID)'; \
	make create_core_tag; \
	git push; \
	npm run publish
endif

publish_components_prepatch:
ifeq ($(BRANCH), dev)
	$(error You can only post patch, minor and major in this branch)
else
	make delete_folders;\
	npm run tsc:components;\
	npm run prettier:write;\
	npm run prepatch;\
	make steps_compoments;\
	git add .; \
	git commit --no-verify -m 'Automatic commit of successful build $(BUILDID)'; \
	make create_core_tag; \
	git push; \
	npm run publish
endif

.test_components:
	npm run tsc:components;\
	make build_components;\
	rm -rf ./inject-components-test/build;\
	rm -rf ./inject-components-test/node_modules;\
	rm -rf ./inject-components-test/publish-components;\
	cp -R ./publish-components ./inject-components-test;\
	cd ./inject-components-test && npm i;\
	cd ./publish-components && npm i;\
	cp -R ./node_modules/ ../node_modules/;\
	rm -rf ./node_modules;\
	cd ../;\
	cp -R ./publish-components/ ./node_modules/@holism/core/;\
	rm -rf ./publish-components;\
	docker-compose stop && docker-compose rm -f && docker-compose build --no-cache && docker-compose up -d --force-recreate; \

# ------------------------ICONS--------------------------
create_icons_tag:
	git tag $(ICONS_VERSION)-icons; \

copy_files_for_icons:
	cp ./src/icons/README.md ./publish-icons/;\
	cp ./src/icons/package.json ./publish-icons/;\

copy_files_for_icons_vue:
	cp ./src/icons/README_VUE.md ./publish-icons-vue/README.md;\
	cp ./src/icons/package-vue.json ./publish-icons-vue/package.json;\

build_icons:
	rm -rf publish-icons/;\
	rm -rf publish-icons-vue/;\
	npm run tsc:icons || exit 1;\
	npm run build-icons || exit 1;\
	npm run build-icons-vue || exit 1;\
	make copy_files_for_icons;\
	make copy_files_for_icons_vue;\

publish_icons:
	mkdir publish-icons;\
    make build_icons;\
    make copy_files_for_icons;\
    npm run prettier:write; \
    npm run patch:icons; \
    git add ./src/icons;\
    git commit --no-verify -m 'Automatic commit of successful build for ICONS $(BUILDID)'; \
    make create_icons_tag; \
    git push; \
    npm run publishIcons; \

publish_icons_prerelease:
	mkdir publish-icons;\
	make build_icons;\
	make copy_files_for_icons;\
	npm run prettier:write; \
	npm run prerelease:icons; \
	git add ./src/icons;\
	git commit --no-verify -m 'Automatic commit of successful build for ICONS $(BUILDID)'; \
	make create_icons_tag; \
	git push; \
	npm run publishIcons; \


# ------------------------DOTFILES--------------------------
create_dotfiles_tag:
	git tag $(DOTFILES_VERSION)-dotfiles; \

copy_files_for_dotfiles:
	mkdir ./publish-dotfiles/;\
	cp ./packages/dotfiles/prettier-config.js ./publish-dotfiles/;\
	cp ./packages/dotfiles/stylelint-config.js ./publish-dotfiles/;\
	cp ./packages/dotfiles/tsconfig.json ./publish-dotfiles/;\
	cp ./packages/dotfiles/package.json ./publish-dotfiles/;\
	cp ./packages/dotfiles/README.md ./publish-dotfiles/;\
	cp ./packages/dotfiles/eslint-config.js ./publish-dotfiles/;\

publish_dotfiles:
	npm run patch:dotfiles; \
	make copy_files_for_dotfiles; \
	git add .;\
    git commit --no-verify -m 'Automatic commit of successful build for DOTFILES $(BUILDID)'; \
	make create_dotfiles_tag; \
	git push; \
	npm run publish-dotfiles; \


#------------------TABLE-----------------
build_table:
	rm -rf ./publish-table;\
	npm run tsc:table || exit 1;\
	cp ./src/table/package.json ./publish-table/;\
	cp ./src/table/README.md ./publish-table/;\
