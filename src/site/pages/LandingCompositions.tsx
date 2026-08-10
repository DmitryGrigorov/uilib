import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  IconAdd,
  IconChart1,
  IconFolder,
  IconHome1,
  IconNotification,
  IconPeople,
  IconSearchNormal1,
  IconSetting1
} from "@dmitrygrigorov/icons";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Badge from "../../components/Badge";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import DateBox from "../../components/DateBox";
import type { TDateBoxViewType } from "../../components/DateBox";
import Input from "../../components/Input";
import MultiSelect from "../../components/MultiSelect";
import PageHeader from "../../components/PageHeader";
import Pagination from "../../components/Pagination";
import Select from "../../components/Select";
import Status from "../../components/Status";
import Switch from "../../components/Switch";
import Tabs from "../../components/Tabs";
import Table from "../../table/Table";
import type {
  ITableSortMenuItem,
  TCellParamsStatus,
  TColumn
} from "../../table/types";
import { Section, SectionHeading } from "./Landing.styles";
import {
  BrowserBar,
  BrowserDots,
  BrowserLocation,
  CalendarGrid,
  CalendarHeader,
  CompositionCanvas,
  CompositionMotion,
  CompositionPanel,
  CompositionTabs,
  DashboardBrand,
  DashboardCanvas,
  DashboardContent,
  DashboardFilterBar,
  DashboardKpis,
  DashboardMain,
  DashboardNav,
  DashboardNavItem,
  DashboardPageHead,
  DashboardPagination,
  DashboardSidebar,
  DashboardTableFrame,
  DashboardTopbar,
  FieldGrid,
  FieldGroup,
  FormActions,
  FormCanvas,
  FormContent,
  FormIntro,
  FormSidebar,
  FormStep,
  FormSteps,
  KpiCard,
  ScheduleCard,
  SpanField,
  SubmissionNote,
  SwitchSetting
} from "./LandingCompositions.styles";

type TComposition = "form" | "dashboard";

type TOption = {
  label: string;
  value: string;
};

type TDashboardStatus = "Active" | "Review" | "Paused" | "Archived";

type TDashboardRow = {
  id: string;
  project: string;
  owner: string;
  status: TDashboardStatus;
  environment: string;
  updated: string;
};

const organizationSizes: TOption[] = [
  { label: "1–25 people", value: "small" },
  { label: "26–100 people", value: "medium" },
  { label: "101–500 people", value: "large" },
  { label: "500+ people", value: "enterprise" }
];

const roleOptions: TOption[] = [
  { label: "Product admin", value: "admin" },
  { label: "Billing manager", value: "billing" },
  { label: "Developer", value: "developer" },
  { label: "Analyst", value: "analyst" }
];

const dashboardRows: TDashboardRow[] = [
  {
    id: "launchpad",
    project: "Launchpad",
    owner: "Avery Chen",
    status: "Active",
    environment: "Production",
    updated: "2 min ago"
  },
  {
    id: "ledger",
    project: "Ledger Cloud",
    owner: "Maya Singh",
    status: "Review",
    environment: "Staging",
    updated: "18 min ago"
  },
  {
    id: "insights",
    project: "Insights Hub",
    owner: "Noah Williams",
    status: "Active",
    environment: "Production",
    updated: "1 hr ago"
  },
  {
    id: "migration",
    project: "Core Migration",
    owner: "Sofia Martinez",
    status: "Paused",
    environment: "Development",
    updated: "Yesterday"
  },
  {
    id: "archive",
    project: "Legacy Reports",
    owner: "Liam Brown",
    status: "Archived",
    environment: "Read only",
    updated: "May 28"
  }
];

const sortMenuItems: ITableSortMenuItem[] = [
  {
    options: [
      { title: "A to Z", nameSort: "asc" },
      { title: "Z to A", nameSort: "desc" }
    ]
  }
];

const statusCell: Record<TDashboardStatus, TCellParamsStatus> = {
  Active: { status: "success", isFilled: true },
  Review: { status: "warning" },
  Paused: { status: "processing" },
  Archived: { colorType: "neutral" }
};

const dashboardColumns: TColumn<TDashboardRow, string>[] = [
  {
    field: "project",
    title: "Project",
    isSortable: true,
    sortMenuItems,
    comparator: (valueA, valueB, nameSort) => {
      if (nameSort === "asc") {
        return valueA.localeCompare(valueB);
      }
      if (nameSort === "desc") {
        return valueB.localeCompare(valueA);
      }
      return 0;
    }
  },
  { field: "owner", title: "Owner" },
  {
    field: "status",
    title: "Status",
    columnTypes: "status",
    cellParamsGetter: ({ value }) =>
      statusCell[(value || "Archived") as TDashboardStatus]
  },
  { field: "environment", title: "Environment" },
  { field: "updated", title: "Last updated" }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const formSteps = [
  { label: "Organization", description: "Workspace details" },
  { label: "Team access", description: "Roles and alerts" },
  { label: "Schedule", description: "Deadline and review" }
];

const compositionTabs: Array<{
  label: string;
  value: TComposition;
}> = [
  { label: "Enterprise registration", value: "form" },
  { label: "Data dashboard", value: "dashboard" }
];

const dashboardViews = ["all", "active", "archived"] as const;
const dashboardPageSize = 3;

const getDateView = (
  day: number,
  selectedDay: number
): TDateBoxViewType | undefined => {
  if (day === selectedDay) {
    return "selected";
  }
  if (day === 16) {
    return "current";
  }
  if (day === 20 || day === 21) {
    return "weekend";
  }
  return undefined;
};

const getNextTabIndex = (
  key: string,
  currentIndex: number,
  tabCount: number
): number | undefined => {
  if (key === "ArrowRight" || key === "ArrowDown") {
    return (currentIndex + 1) % tabCount;
  }
  if (key === "ArrowLeft" || key === "ArrowUp") {
    return (currentIndex - 1 + tabCount) % tabCount;
  }
  if (key === "Home") {
    return 0;
  }
  if (key === "End") {
    return tabCount - 1;
  }
  return undefined;
};

const focusTab = (id: string): void => {
  window.requestAnimationFrame(() => document.getElementById(id)?.focus());
};

const EnterpriseForm: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const submissionTimer = useRef<number>(undefined);
  const [step, setStep] = useState(1);
  const [highestAvailableStep, setHighestAvailableStep] = useState(1);
  const [organization, setOrganization] = useState("Northstar Labs");
  const [workspace, setWorkspace] = useState("n");
  const [organizationSize, setOrganizationSize] = useState<TOption | null>(
    organizationSizes[2]
  );
  const [roles, setRoles] = useState<TOption[]>([
    roleOptions[0],
    roleOptions[2]
  ]);
  const [notifications, setNotifications] = useState(true);
  const [deadline, setDeadline] = useState(18);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const isOrganizationValid = organization.trim().length >= 2;
  const isWorkspaceValid = workspace.trim().length >= 3;
  const isOrganizationStepValid =
    isOrganizationValid && isWorkspaceValid && organizationSize !== null;
  const isAccessStepValid = roles.length > 0;
  let isCurrentStepValid = true;
  if (step === 1) {
    isCurrentStepValid = isOrganizationStepValid;
  } else if (step === 2) {
    isCurrentStepValid = isAccessStepValid;
  }

  useEffect(() => () => window.clearTimeout(submissionTimer.current), []);

  const resetForm = (): void => {
    window.clearTimeout(submissionTimer.current);
    setStep(1);
    setHighestAvailableStep(1);
    setOrganization("Northstar Labs");
    setWorkspace("n");
    setOrganizationSize(organizationSizes[2]);
    setRoles([roleOptions[0], roleOptions[2]]);
    setNotifications(true);
    setDeadline(18);
    setSubmitting(false);
    setComplete(false);
  };

  const continueForm = (): void => {
    if (!isCurrentStepValid || step >= formSteps.length) {
      return;
    }

    const nextStep = step + 1;
    setStep(nextStep);
    setHighestAvailableStep((current) => Math.max(current, nextStep));
  };

  const submitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      step !== 3 ||
      isSubmitting ||
      !isOrganizationStepValid ||
      !isAccessStepValid
    ) {
      return;
    }

    window.clearTimeout(submissionTimer.current);
    setSubmitting(true);
    setComplete(false);
    submissionTimer.current = window.setTimeout(() => {
      setSubmitting(false);
      setComplete(true);
    }, 1100);
  };

  return (
    <FormCanvas
      role="region"
      aria-label="Interactive enterprise registration example">
      <FormSidebar>
        <FormIntro>
          <Badge colorType="amber">Project setup</Badge>
          <h3>Launch your workspace</h3>
          <p>
            A complete onboarding flow assembled from production primitives.
          </p>
        </FormIntro>

        <FormSteps aria-label="Registration progress">
          {formSteps.map(({ label, description }, index) => {
            const stepNumber = index + 1;
            return (
              <FormStep
                key={label}
                type="button"
                $active={step === stepNumber}
                $complete={step > stepNumber}
                disabled={
                  stepNumber > highestAvailableStep ||
                  (stepNumber > step && !isCurrentStepValid)
                }
                aria-current={step === stepNumber ? "step" : undefined}
                onClick={() => setStep(stepNumber)}>
                <span>{step > stepNumber ? "Done" : stepNumber}</span>
                <div>
                  <strong>{label}</strong>
                  <small>{description}</small>
                </div>
              </FormStep>
            );
          })}
        </FormSteps>

        <Status status="success">Autosaved just now</Status>
      </FormSidebar>

      <FormContent onSubmit={submitForm}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}>
            {step === 1 && (
              <>
                <h3>Organization details</h3>
                <p>
                  Create the shared workspace your product and operations teams
                  will use.
                </p>
                <FieldGrid>
                  <FieldGroup>
                    <label htmlFor="composition-organization">
                      Organization name
                    </label>
                    <Input
                      id="composition-organization"
                      value={organization}
                      status={isOrganizationValid ? "success" : "error"}
                      statusText={
                        isOrganizationValid
                          ? "Organization name is available"
                          : "Use at least two characters"
                      }
                      placeholder="Organization name"
                      onChange={(_, value) => setOrganization(value)}
                    />
                  </FieldGroup>

                  <FieldGroup>
                    <label htmlFor="composition-workspace">Workspace URL</label>
                    <Input
                      id="composition-workspace"
                      value={workspace}
                      status={workspace.length < 3 ? "error" : "success"}
                      statusText={
                        workspace.length < 3
                          ? "Use at least three characters"
                          : "Workspace URL is ready"
                      }
                      placeholder="northstar"
                      onChange={(_, value) => setWorkspace(value)}
                    />
                  </FieldGroup>

                  <SpanField>
                    <label htmlFor="composition-size">Organization size</label>
                    <Select<TOption, "value", "label">
                      id="composition-size"
                      inputId="composition-size"
                      options={organizationSizes}
                      value={organizationSize || undefined}
                      status={organizationSize ? "success" : "error"}
                      statusText={
                        organizationSize
                          ? "Team size selected"
                          : "Choose an organization size"
                      }
                      placeholder="Choose a team size"
                      onChange={(value) => setOrganizationSize(value)}
                    />
                  </SpanField>
                </FieldGrid>
              </>
            )}

            {step === 2 && (
              <>
                <h3>Team access</h3>
                <p>
                  Assign the first workspace roles and choose how the team stays
                  informed.
                </p>
                <FieldGrid>
                  <SpanField>
                    <label htmlFor="composition-roles">Initial roles</label>
                    <MultiSelect<TOption, "value", "label">
                      id="composition-roles"
                      inputId="composition-roles"
                      options={roleOptions}
                      value={roles}
                      status={roles.length > 0 ? "success" : "error"}
                      statusText={
                        roles.length > 0
                          ? `${roles.length} roles selected`
                          : "Select at least one role"
                      }
                      placeholder="Select workspace roles"
                      onChange={(value) => setRoles(value)}
                    />
                  </SpanField>

                  <FieldGroup>
                    <label htmlFor="composition-owner-email">Owner email</label>
                    <Input
                      id="composition-owner-email"
                      type="email"
                      value="avery@northstar.dev"
                      status="success"
                      statusText="Invitation is ready"
                      isReadOnly
                    />
                  </FieldGroup>

                  <SwitchSetting>
                    <div>
                      <strong>Enable notifications</strong>
                      <span>Send launch and security updates.</span>
                    </div>
                    <Switch
                      ariaLabel="Enable notifications"
                      isChecked={notifications}
                      onChange={(_, checked) => setNotifications(checked)}
                      hasTextOrIcon
                    />
                  </SwitchSetting>
                </FieldGrid>
              </>
            )}

            {step === 3 && (
              <>
                <h3>Choose a launch deadline</h3>
                <p>
                  Select a target date, review the setup, and create the
                  workspace.
                </p>
                <ScheduleCard>
                  <CalendarHeader>
                    <div>
                      <strong>June 2026</strong>
                      <span>Target launch date</span>
                    </div>
                    <Status colorType="blue">UTC−04:00</Status>
                  </CalendarHeader>
                  <CalendarGrid
                    role="group"
                    aria-label="June 2026 deadline picker">
                    {[14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((day) => (
                      <DateBox
                        key={day}
                        type="button"
                        size="m"
                        viewType={getDateView(day, deadline)}
                        aria-label={`June ${day}`}
                        aria-pressed={day === deadline}
                        onClick={() => setDeadline(day)}>
                        {day}
                      </DateBox>
                    ))}
                  </CalendarGrid>
                </ScheduleCard>
                <SubmissionNote aria-live="polite">
                  <Status status="success" isFilled>
                    Ready to create
                  </Status>
                  <span>
                    {organization || "Your organization"} · {roles.length} roles
                    · June {deadline}
                  </span>
                </SubmissionNote>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <FormActions>
          <Button type="button" viewType="secondary" onClick={resetForm}>
            Cancel
          </Button>
          <div>
            {step > 1 && (
              <Button
                type="button"
                viewType="ghost"
                onClick={() => setStep((current) => current - 1)}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                viewType="primary"
                isDisabled={!isCurrentStepValid}
                onClick={continueForm}>
                Continue
              </Button>
            ) : (
              <Button type="submit" viewType="primary" isLoading={isSubmitting}>
                {isComplete ? "Workspace created" : "Create workspace"}
              </Button>
            )}
          </div>
        </FormActions>
      </FormContent>
    </FormCanvas>
  );
};

const DataDashboard: React.FC = () => {
  const [rows, setRows] = useState(dashboardRows);
  const [activeView, setActiveView] =
    useState<(typeof dashboardViews)[number]>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dashboardNotice, setDashboardNotice] = useState("");

  const visibleRows = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesView =
        activeView === "all" ||
        (activeView === "active" && row.status === "Active") ||
        (activeView === "archived" && row.status === "Archived");
      const matchesSearch =
        !normalizedSearch ||
        row.project.toLowerCase().includes(normalizedSearch) ||
        row.owner.toLowerCase().includes(normalizedSearch);
      return matchesView && matchesSearch;
    });
  }, [activeView, rows, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(visibleRows.length / dashboardPageSize)
  );
  const firstVisibleRow = (currentPage - 1) * dashboardPageSize;
  const paginatedRows = visibleRows.slice(
    firstVisibleRow,
    firstVisibleRow + dashboardPageSize
  );
  const rangeStart = visibleRows.length === 0 ? 0 : firstVisibleRow + 1;
  const rangeEnd = Math.min(
    firstVisibleRow + dashboardPageSize,
    visibleRows.length
  );

  const changeView = (value: string | number): void => {
    setActiveView(value as (typeof dashboardViews)[number]);
    setCurrentPage(1);
  };

  const handleViewKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    const currentIndex = dashboardViews.indexOf(activeView);
    const nextIndex = getNextTabIndex(
      event.key,
      currentIndex,
      dashboardViews.length
    );
    if (typeof nextIndex === "undefined") {
      return;
    }

    event.preventDefault();
    const nextView = dashboardViews[nextIndex];
    changeView(nextView);
    focusTab(`dashboard-filter-${nextView}`);
  };

  const changeSearch = (value: string): void => {
    setSearch(value);
    setCurrentPage(1);
  };

  const addProject = (): void => {
    const projectNumber = rows.length + 1;
    setRows((currentRows) => [
      {
        id: `project-${projectNumber}`,
        project: `Project ${projectNumber}`,
        owner: "Avery Chen",
        status: "Review",
        environment: "Development",
        updated: "Just now"
      },
      ...currentRows
    ]);
    setActiveView("all");
    setSearch("");
    setCurrentPage(1);
    setDashboardNotice("A draft project was added");
  };

  return (
    <DashboardCanvas
      role="region"
      aria-label="Interactive data dashboard example">
      <DashboardSidebar>
        <DashboardBrand>
          <span>UI</span>
          <div>
            <strong>System Cloud</strong>
            <small>Enterprise</small>
          </div>
        </DashboardBrand>
        <DashboardNav aria-label="Dashboard navigation">
          <DashboardNavItem
            type="button"
            $active
            aria-current="page"
            onClick={() => setDashboardNotice("Overview is already open")}>
            <IconHome1 width={18} height={18} /> Overview
          </DashboardNavItem>
          <DashboardNavItem
            type="button"
            onClick={() => setDashboardNotice("Projects navigation selected")}>
            <IconFolder width={18} height={18} /> Projects
            <Badge colorType="amber" size="m">
              12
            </Badge>
          </DashboardNavItem>
          <DashboardNavItem
            type="button"
            onClick={() => setDashboardNotice("Team navigation selected")}>
            <IconPeople width={18} height={18} /> Team
          </DashboardNavItem>
          <DashboardNavItem
            type="button"
            onClick={() => setDashboardNotice("Reports navigation selected")}>
            <IconChart1 width={18} height={18} /> Reports
          </DashboardNavItem>
        </DashboardNav>
        <DashboardNavItem
          type="button"
          onClick={() => setDashboardNotice("Settings navigation selected")}>
          <IconSetting1 width={18} height={18} /> Settings
        </DashboardNavItem>
      </DashboardSidebar>

      <DashboardMain>
        <DashboardTopbar>
          <label className="sr-only" htmlFor="composition-dashboard-search">
            Search projects or owners
          </label>
          <Input
            id="composition-dashboard-search"
            value={search}
            placeholder="Search projects or owners"
            iconLeft={<IconSearchNormal1 />}
            isShowClearIcon
            onChange={(_, value) => changeSearch(value)}
          />
          <span className="sr-only" role="status" aria-live="polite">
            {dashboardNotice}
          </span>
          <Button
            viewType="icon"
            size="m"
            aria-label="Open notifications"
            icon={<IconNotification />}
            onClick={() => setDashboardNotice("You have no new notifications")}
          />
        </DashboardTopbar>

        <DashboardContent>
          <Breadcrumbs
            items={[
              { text: "Workspace" },
              { text: "Projects", viewType: "current" }
            ]}
          />
          <DashboardPageHead>
            <PageHeader
              text="Projects"
              trailContent={
                <Button
                  viewType="primary"
                  size="m"
                  icon={<IconAdd />}
                  onClick={addProject}>
                  New project
                </Button>
              }
            />
          </DashboardPageHead>

          <DashboardKpis>
            <KpiCard>
              <span>Active projects</span>
              <strong>24</strong>
              <Status status="success">+12% this month</Status>
            </KpiCard>
            <KpiCard>
              <span>Deployments</span>
              <strong>184</strong>
              <Badge colorType="blue">99.98% healthy</Badge>
            </KpiCard>
            <KpiCard>
              <span>Open reviews</span>
              <strong>7</strong>
              <Status status="warning">3 need attention</Status>
            </KpiCard>
          </DashboardKpis>

          <DashboardTableFrame>
            <DashboardFilterBar>
              <Tabs
                size="m"
                value={activeView}
                aria-label="Filter projects"
                onKeyDown={handleViewKeyDown}
                onChange={(_, value) => changeView(value)}>
                {dashboardViews.map((view) => (
                  <Tabs.Tab
                    key={view}
                    id={`dashboard-filter-${view}`}
                    label={view.charAt(0).toUpperCase() + view.slice(1)}
                    value={view}
                    aria-controls="dashboard-projects-table"
                    aria-selected={activeView === view}
                    tabIndex={activeView === view ? 0 : -1}
                  />
                ))}
              </Tabs>
              <Status colorType="neutral">{visibleRows.length} results</Status>
            </DashboardFilterBar>

            <div
              id="dashboard-projects-table"
              role="region"
              aria-live="polite"
              aria-labelledby={`dashboard-filter-${activeView}`}
              className="dashboard-table-scroll">
              <Table<TDashboardRow, string>
                columns={dashboardColumns}
                rowData={paginatedRows}
                size="s"
                isDividerRow
                getRowId={({ data }) => data.id}
                getRowClassName={({ rowIndex }) =>
                  `composition-row composition-row-${rowIndex}`
                }
              />
            </div>

            <DashboardPagination>
              <span>
                Showing {rangeStart}–{rangeEnd} of {visibleRows.length} projects
              </span>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                width="min(100%, 390px)"
                isShowSwitchers
                switcherTextPrev="Previous"
                switcherTextNext="Next"
                onPageChange={setCurrentPage}
              />
            </DashboardPagination>
          </DashboardTableFrame>
        </DashboardContent>
      </DashboardMain>
    </DashboardCanvas>
  );
};

const LandingCompositions: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeComposition, setActiveComposition] =
    useState<TComposition>("form");

  const handleCompositionKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    const currentIndex = compositionTabs.findIndex(
      ({ value }) => value === activeComposition
    );
    const nextIndex = getNextTabIndex(
      event.key,
      currentIndex,
      compositionTabs.length
    );
    if (typeof nextIndex === "undefined") {
      return;
    }

    event.preventDefault();
    const nextComposition = compositionTabs[nextIndex].value;
    setActiveComposition(nextComposition);
    focusTab(`composition-tab-${nextComposition}`);
  };

  return (
    <Section id="compositions" aria-labelledby="compositions-title">
      <CompositionMotion
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={sectionVariants}
        transition={prefersReducedMotion ? { duration: 0 } : undefined}>
        <SectionHeading as={motion.div} variants={itemVariants}>
          <span>Built with UI Lib</span>
          <h2 id="compositions-title">Build Complex UIs in Minutes.</h2>
          <p>
            Move beyond isolated primitives. Explore complete product surfaces
            assembled from the same typed, theme-aware components your team can
            ship.
          </p>
        </SectionHeading>

        <CompositionTabs variants={itemVariants}>
          <Tabs
            size="l"
            value={activeComposition}
            aria-label="Choose a complex composition"
            onKeyDown={handleCompositionKeyDown}
            onChange={(_, value) =>
              setActiveComposition(value as TComposition)
            }>
            {compositionTabs.map(({ label, value }) => (
              <Tabs.Tab
                key={value}
                id={`composition-tab-${value}`}
                label={label}
                value={value}
                aria-controls={`composition-panel-${value}`}
                aria-selected={activeComposition === value}
                tabIndex={activeComposition === value ? 0 : -1}
              />
            ))}
          </Tabs>
          <p>
            Interactive examples · real validation · responsive layouts · no
            mock controls
          </p>
        </CompositionTabs>

        <CompositionCanvas variants={itemVariants}>
          <BrowserBar aria-hidden="true">
            <BrowserDots>
              <i />
              <i />
              <i />
            </BrowserDots>
            <BrowserLocation>preview.uilib.dev/compositions</BrowserLocation>
            <span>Live</span>
          </BrowserBar>

          <AnimatePresence mode="wait" initial={false}>
            <CompositionPanel
              key={activeComposition}
              id={`composition-panel-${activeComposition}`}
              role="tabpanel"
              aria-labelledby={`composition-tab-${activeComposition}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}>
              {activeComposition === "form" ? (
                <EnterpriseForm />
              ) : (
                <DataDashboard />
              )}
            </CompositionPanel>
          </AnimatePresence>
        </CompositionCanvas>
      </CompositionMotion>
    </Section>
  );
};

export default LandingCompositions;
