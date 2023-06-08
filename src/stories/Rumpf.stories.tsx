import { Meta } from "@storybook/react";
import Rumpf from '../components/Rumpf';

export default {
  component: Rumpf,
  title: 'SearchComponents/Rumpf',
} as Meta;

export const French: React.FC = () => <Rumpf locale='fr' />;

export const English: React.FC = () => <Rumpf locale='en' />;
