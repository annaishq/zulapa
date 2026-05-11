/* Tweaks panel — drives layout variants + entry styles via data-* attrs */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "two-col",
  "entry": "card",
  "trail": "all",
  "graph": true,
  "density": "default"
}/*EDITMODE-END*/;

function KeoTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const d = document.documentElement.dataset;
    d.layout  = t.layout  || "two-col";
    d.entry   = t.entry   || "card";
    d.trail   = t.trail   || "all";
    d.graph   = t.graph === false ? "off" : "on";
    d.density = t.density || "default";
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Layout">
        <TweakSelect
          label="article + reference"
          value={t.layout}
          onChange={v => setTweak("layout", v)}
          options={[
            { value: "two-col",  label: "two columns (side by side)" },
            { value: "stack",    label: "reference slides over" },
            { value: "docked",   label: "reference docks at bottom" },
          ]}
        />
        <TweakRadio
          label="trail UI"
          value={t.trail}
          onChange={v => setTweak("trail", v)}
          options={[
            { value: "all",        label: "both" },
            { value: "breadcrumb", label: "crumbs" },
            { value: "back",       label: "back" },
          ]}
        />
      </TweakSection>

      <TweakSection title="Word entry">
        <TweakRadio
          label="style"
          value={t.entry}
          onChange={v => setTweak("entry", v)}
          options={[
            { value: "card",  label: "card" },
            { value: "list",  label: "list" },
            { value: "table", label: "table" },
          ]}
        />
        <TweakToggle
          label="mini relationship graph"
          value={t.graph}
          onChange={v => setTweak("graph", v)}
        />
      </TweakSection>

      <TweakSection title="Density">
        <TweakRadio
          label="spacing"
          value={t.density}
          onChange={v => setTweak("density", v)}
          options={[
            { value: "compact", label: "tight" },
            { value: "default", label: "default" },
            { value: "airy",    label: "airy" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

window.KeoTweaks = KeoTweaks;
