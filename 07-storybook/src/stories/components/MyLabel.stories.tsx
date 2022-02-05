import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: {
      control: "select",
      // If you need to render some options, weird but possible
      //options: ["normal", "h1"],
    },
    color: {
      control: "select",
    },
    fontColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

/**
 * Its like copy a component but without referece
 */
export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
AllCaps.args = {
  size: "normal",
  color: "secondary",
};
