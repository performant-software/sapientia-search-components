import { Meta } from "@storybook/react";
import Bischoff from '../components/Bischoff';

export default {
  component: Bischoff,
  title: 'SearchComponents/Bischoff',
} as Meta;

export const Default: React.FC = () => <Bischoff />;
