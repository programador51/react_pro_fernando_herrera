import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
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

export const Secondary = Template.bind({});
