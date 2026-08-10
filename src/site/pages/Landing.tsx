import React, {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import {
  IconArrowRight,
  IconCode1,
  IconCopy,
  IconFlash,
  IconShieldTick,
  IconStar,
  IconTick,
  IconTickCircle
} from "@dmitrygrigorov/icons";
import { useReducedMotion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Avatar } from "../../components/Avatar";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProgressBar from "../../components/ProgressBar";
import Status from "../../components/Status";
import ThemeSwitch from "../../components/ThemeSwitch";
import avatarPlaceholder from "../../assets/avatar.svg";
import Footer from "../components/Footer";
import { DarkThemeSite } from "../themes/dark";
import { LightThemeSite } from "../themes/light";
import {
  ComponentStage,
  CtaActions,
  CtaPanel,
  CtaPrimary,
  CtaSecondary,
  CtaSection,
  Eyebrow,
  FeatureCard,
  FeatureGrid,
  FeatureIcon,
  HeroActions,
  HeroCopy,
  HeroDescription,
  HeroPreview,
  HeroPreviewShell,
  HeroSection,
  HeroTitle,
  InputStage,
  InstallCommand,
  LandingRoot,
  ModalDemoContent,
  PerformanceCopy,
  PerformanceItem,
  PerformanceList,
  PerformancePanel,
  PreviewCard,
  PreviewCardHeader,
  PreviewContent,
  PreviewForm,
  PreviewStatusRow,
  PreviewToolbar,
  PrimaryAction,
  Section,
  SectionHeading,
  SecondaryAction,
  ShowcaseCard,
  ShowcaseGrid,
  TrustMetric,
  TrustStrip,
  WindowDots
} from "./Landing.styles";

const ModalWindow = lazy(() => import("../../components/ModalWindow"));
const LandingCompositions = lazy(() => import("./LandingCompositions"));

const QUICK_START_COMMAND =
  "git clone https://github.com/DmitryGrigorov/uilib.git";

const features = [
  {
    icon: <IconFlash width={22} height={22} />,
    title: "Motion that feels native",
    description:
      "Spring-based entrances, overlays, and state transitions are tuned into the components—not bolted on after the product ships."
  },
  {
    icon: <IconCode1 width={22} height={22} />,
    title: "A typed API from end to end",
    description:
      "React 19 primitives, exported prop types, and predictable semantic tokens keep refactors fast and code review calm."
  },
  {
    icon: <IconShieldTick width={22} height={22} />,
    title: "Accessible interaction defaults",
    description:
      "Visible focus, keyboard-ready controls, reduced-motion fallbacks, and contrast-conscious themes establish a stronger baseline."
  },
  {
    icon: <IconTickCircle width={22} height={22} />,
    title: "Dependency discipline",
    description:
      "React and styled-components stay peer-aligned, while ESM output lets product teams import only the primitives they use."
  }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const copyFeedbackTimer = useRef<number>(undefined);
  const [copied, setCopied] = useState(false);
  const [previewName, setPreviewName] = useState("Avery Chen");
  const [previewTheme, setPreviewTheme] = useState("light");
  const [isModalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(68);

  const motionTransition = useMemo(
    () =>
      prefersReducedMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 220, damping: 28 },
    [prefersReducedMotion]
  );

  const copyQuickStartCommand = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(QUICK_START_COMMAND);
      setCopied(true);
      window.clearTimeout(copyFeedbackTimer.current);
      copyFeedbackTimer.current = window.setTimeout(
        () => setCopied(false),
        1800
      );
    } catch {
      setCopied(false);
    }
  };

  const handlePreviewTheme = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newTheme: string
  ): void => setPreviewTheme(newTheme);

  useEffect(() => () => window.clearTimeout(copyFeedbackTimer.current), []);

  return (
    <LandingRoot>
      <HeroSection aria-labelledby="hero-title">
        <HeroCopy
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={reveal}
          transition={motionTransition}>
          <Eyebrow>React 19 · TypeScript · Motion</Eyebrow>
          <HeroTitle id="hero-title">
            Ship reliable interfaces at <span>product speed.</span>
          </HeroTitle>
          <HeroDescription>
            A production-minded React component system with an expressive orange
            identity, precise TypeScript APIs, and interactions that already
            feel finished.
          </HeroDescription>

          <HeroActions>
            <PrimaryAction to="/components">
              Explore components <IconArrowRight width={18} height={18} />
            </PrimaryAction>
            <SecondaryAction
              href="https://github.com/DmitryGrigorov/uilib"
              target="_blank"
              rel="noreferrer">
              <IconCode1 width={18} height={18} /> View on GitHub
            </SecondaryAction>
          </HeroActions>

          <InstallCommand
            type="button"
            onClick={() => void copyQuickStartCommand()}
            aria-label={`${copied ? "Copied" : "Copy"} quick-start command`}>
            <code>{QUICK_START_COMMAND}</code>
            <span aria-hidden="true">
              {copied ? (
                <IconTick width={18} height={18} />
              ) : (
                <IconCopy width={18} height={18} />
              )}
            </span>
          </InstallCommand>
          <span className="sr-only" aria-live="polite">
            {copied ? "Install command copied" : ""}
          </span>
        </HeroCopy>

        <HeroPreviewShell
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 28 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            ...motionTransition,
            delay: prefersReducedMotion ? 0 : 0.12
          }}>
          <ThemeProvider
            theme={previewTheme === "dark" ? DarkThemeSite : LightThemeSite}>
            <HeroPreview
              role="region"
              aria-label="Interactive component preview">
              <PreviewToolbar>
                <div>
                  <WindowDots aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </WindowDots>
                  Live product surface
                </div>
                <ThemeSwitch
                  size="l"
                  themeSelected={previewTheme}
                  onChange={handlePreviewTheme}
                />
              </PreviewToolbar>

              <PreviewContent>
                <PreviewCard>
                  <PreviewCardHeader>
                    <div>
                      <h3>Create a workspace</h3>
                      <p>
                        Try the controls. This preview is running real UI Lib
                        components.
                      </p>
                    </div>
                    <Status status="success" isFilled>
                      Live
                    </Status>
                  </PreviewCardHeader>
                  <PreviewForm>
                    <Input
                      value={previewName}
                      placeholder="Workspace owner"
                      isShowClearIcon
                      onChange={(_, value) => setPreviewName(value)}
                    />
                    <Button
                      viewType="primary"
                      onClick={() => setModalOpen(true)}>
                      Launch
                    </Button>
                  </PreviewForm>
                  <PreviewStatusRow>
                    <Status colorType="amber">Typed API</Status>
                    <Status colorType="blue">Motion ready</Status>
                    <Status colorType="teal">Theme aware</Status>
                  </PreviewStatusRow>
                </PreviewCard>

                <PreviewCard>
                  <PreviewCardHeader>
                    <div>
                      <h3>Adoption progress</h3>
                      <p>{progress}% of product surfaces migrated</p>
                    </div>
                    <Button
                      size="xs"
                      viewType="ghost"
                      onClick={() =>
                        setProgress((value) =>
                          value >= 100 ? 34 : Math.min(100, value + 11)
                        )
                      }>
                      Advance
                    </Button>
                  </PreviewCardHeader>
                  <ProgressBar progress={progress} variant="info" />
                </PreviewCard>
              </PreviewContent>
            </HeroPreview>
          </ThemeProvider>
        </HeroPreviewShell>
      </HeroSection>

      <TrustStrip aria-label="Library facts">
        <TrustMetric>
          <strong>68</strong>
          <span>component domains</span>
        </TrustMetric>
        <TrustMetric>
          <strong>1,200+</strong>
          <span>generated icons</span>
        </TrustMetric>
        <TrustMetric>
          <strong>14-step</strong>
          <span>semantic color scales</span>
        </TrustMetric>
        <TrustMetric>
          <strong>2 modes</strong>
          <span>light and dark</span>
        </TrustMetric>
      </TrustStrip>

      <Section id="features" aria-labelledby="features-title">
        <SectionHeading>
          <span>Built for real product work</span>
          <h2 id="features-title">
            A design system that removes the expensive decisions.
          </h2>
          <p>
            Spend less time rebuilding behavior, polishing edge states, and
            aligning visual language. UI Lib gives teams a consistent path from
            prototype to production.
          </p>
        </SectionHeading>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              transition={{ ...motionTransition, delay: index * 0.04 }}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Section>

      <Section id="showcase" aria-labelledby="showcase-title">
        <SectionHeading>
          <span>Live component showcase</span>
          <h2 id="showcase-title">Don’t take the screenshots’ word for it.</h2>
          <p>
            These are working library components. Tab through them, edit the
            input, change progress, and open the modal without leaving the
            landing page.
          </p>
        </SectionHeading>

        <ShowcaseGrid>
          <ShowcaseCard
            $columns={5}
            whileHover={prefersReducedMotion ? undefined : { y: -5 }}
            transition={motionTransition}>
            <h3>Actions</h3>
            <p>
              Clear hierarchy across primary, secondary, ghost, and loading
              states.
            </p>
            <ComponentStage>
              <Button viewType="primary">Create release</Button>
              <Button viewType="secondary">Preview</Button>
              <Button viewType="ghost">Dismiss</Button>
            </ComponentStage>
          </ShowcaseCard>

          <ShowcaseCard
            $columns={7}
            whileHover={prefersReducedMotion ? undefined : { y: -5 }}
            transition={motionTransition}>
            <h3>Form controls</h3>
            <p>
              Strong labels, validation-ready states, and predictable keyboard
              behavior.
            </p>
            <InputStage>
              <Input
                value={previewName}
                placeholder="Your name"
                status={previewName.length > 3 ? "success" : undefined}
                statusText={
                  previewName.length > 3 ? "Ready to ship" : undefined
                }
                onChange={(_, value) => setPreviewName(value)}
              />
            </InputStage>
          </ShowcaseCard>

          <ShowcaseCard
            $columns={7}
            whileHover={prefersReducedMotion ? undefined : { y: -5 }}
            transition={motionTransition}>
            <h3>Status language</h3>
            <p>
              Semantic feedback stays readable in both subtle and filled
              treatments.
            </p>
            <ComponentStage>
              <Status status="processing">Processing</Status>
              <Status status="success" isFilled>
                Shipped
              </Status>
              <Status status="warning">Review</Status>
              <Status status="error" isFilled>
                Blocked
              </Status>
            </ComponentStage>
          </ShowcaseCard>

          <ShowcaseCard
            $columns={5}
            whileHover={prefersReducedMotion ? undefined : { y: -5 }}
            transition={motionTransition}>
            <h3>Identity</h3>
            <p>
              Compact avatar primitives with image, initials, presence, and
              disabled states.
            </p>
            <ComponentStage>
              <Avatar size="xl" image={avatarPlaceholder} status="online" />
              <Avatar size="l" text="AC" status="busy" />
              <Avatar size="m" text="UI" status="offline" />
            </ComponentStage>
          </ShowcaseCard>
        </ShowcaseGrid>
      </Section>

      <Suspense
        fallback={
          <Section aria-label="Loading complex compositions">
            <span className="sr-only" aria-live="polite" role="status">
              Loading interactive composition examples…
            </span>
          </Section>
        }>
        <LandingCompositions />
      </Suspense>

      <Section $compact id="performance" aria-labelledby="performance-title">
        <PerformancePanel>
          <PerformanceCopy>
            <Eyebrow>Performance profile</Eyebrow>
            <h2 id="performance-title">
              Built to stay out of your critical path.
            </h2>
            <p>
              The library build emits ESM, keeps framework runtimes
              peer-aligned, and favors transform-and-opacity motion. Your
              bundle, layout, and interaction budget remain yours to control.
            </p>
          </PerformanceCopy>
          <PerformanceList>
            <PerformanceItem>
              <strong>ESM</strong>
              <div>
                <h3>Tree-shakeable modules</h3>
                <p>
                  Import the component surface you need instead of a monolithic
                  runtime.
                </p>
              </div>
            </PerformanceItem>
            <PerformanceItem>
              <strong>CLS</strong>
              <div>
                <h3>Layout-stable primitives</h3>
                <p>
                  Explicit sizes and token-driven spacing reduce avoidable
                  interface jumps.
                </p>
              </div>
            </PerformanceItem>
            <PerformanceItem>
              <strong>GPU</strong>
              <div>
                <h3>Compositor-friendly motion</h3>
                <p>
                  Subtle transforms and opacity transitions keep interaction
                  feedback smooth.
                </p>
              </div>
            </PerformanceItem>
          </PerformanceList>
        </PerformancePanel>
      </Section>

      <CtaSection id="quick-start" aria-labelledby="cta-title">
        <CtaPanel
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={motionTransition}>
          <h2 id="cta-title">
            Give your next product a stronger starting line.
          </h2>
          <p>
            Browse the component catalog, copy an example, and move from blank
            canvas to a coherent product surface in minutes.
          </p>
          <CtaActions>
            <CtaPrimary to="/components">Start building</CtaPrimary>
            <CtaSecondary
              href="https://github.com/DmitryGrigorov/uilib"
              target="_blank"
              rel="noreferrer">
              <IconStar width={18} height={18} /> Star on GitHub
            </CtaSecondary>
          </CtaActions>
        </CtaPanel>
      </CtaSection>

      <Footer />

      {isModalOpen && (
        <Suspense
          fallback={
            <span className="sr-only" aria-live="polite" role="status">
              Opening interactive demo…
            </span>
          }>
          <ModalWindow
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            isOutsideClickClose
            title="Your UI is ready"
            subTitle={`Welcome, ${previewName || "builder"}.`}
            description="This modal is rendered by the production component—not a landing-page mockup."
            footerContent={
              <>
                <Button
                  viewType="secondary"
                  onClick={() => setModalOpen(false)}>
                  Keep exploring
                </Button>
                <Button
                  viewType="primary"
                  onClick={() => navigate("/components")}>
                  Browse components
                </Button>
              </>
            }>
            <ModalDemoContent>
              <Status status="success" isFilled>
                Interactive demo complete
              </Status>
              <p>
                Theme-aware styling, focus management, portal behavior, and
                Motion transitions are already part of the component surface.
              </p>
            </ModalDemoContent>
          </ModalWindow>
        </Suspense>
      )}
    </LandingRoot>
  );
};

export default Landing;
