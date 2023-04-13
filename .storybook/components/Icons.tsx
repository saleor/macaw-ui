import * as Icons from "~/components/Icons";
import { Text, Box } from "~/components";
import { variants } from "~/components/Icons/SVGWrapper/SVGWrapper.css";
import { IconItem, IconGallery } from "@storybook/blocks";
import { useTheme } from "~/theme";

interface IconsPresentationProps {
  title: string;
  size: keyof typeof variants.size;
}

interface Sizes {
  width: string;
  height: string;
}

export const IconsPresentation = ({ title, size }: IconsPresentationProps) => {
  const { width, height } = variants.size[size] as Sizes;
  const wIndex = width.match(/[0-9]/)![0];
  const hIndex = height.match(/[0-9]/g)![0];
  const { themeValues } = useTheme();
  const spaces = themeValues.space as Record<string, string>;

  return (
    <Box paddingTop={10}>
      <Text as="h2" variant="heading">
        {title} ({spaces[wIndex]} x {spaces[hIndex]})
      </Text>
      <Box paddingTop={10}>
        <IconGallery>
          {Object.entries(Icons).map(([name, IconComponent]) => (
            <IconItem name={name}>
              <IconComponent size={size} />
            </IconItem>
          ))}
        </IconGallery>
      </Box>
    </Box>
  );
};
