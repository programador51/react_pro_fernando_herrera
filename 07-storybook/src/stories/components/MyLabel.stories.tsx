import MyLabel from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
};

const Template = () => <MyLabel />;

/**
 * Its like copy a component but without referece
 */
export const Basic = Template.bind({});

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});
