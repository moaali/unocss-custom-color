import extractorSvelte from "@unocss/extractor-svelte";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      theme: {
        colors: {
          cool: "#0000ff",
        },
      },
    }),
    presetIcons(),
  ],
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
