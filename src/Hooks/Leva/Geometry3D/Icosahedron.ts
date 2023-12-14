import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryIcosahedron as Geometry } from "Settings/Leva/Geometry/Icosahedron";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    detail, //
    radius,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Icosahedron: folder({
            detail: Geometry.detail(),
            radius: Geometry.radius(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    detail,
    radius,
  };
}

export { useLeva };
