import { Meta } from "@storybook/react";
import Bischoff from '../components/Bischoff';

export default {
  component: Bischoff,
  title: 'SearchComponents/Bischoff',
} as Meta;

export const French: React.FC = () => <Bischoff locale='fr' />;

export const English: React.FC = () => <Bischoff locale='en' />;
