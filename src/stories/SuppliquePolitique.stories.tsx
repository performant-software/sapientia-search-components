import { Meta } from "@storybook/react";
import SuppliquePolitique from '../components/SuppliquePolitique';

export default {
  component: SuppliquePolitique,
  title: 'SearchComponents/Supplique Politique',
} as Meta;

export const French: React.FC = () => <SuppliquePolitique locale='fr' />;

export const English: React.FC = () => <SuppliquePolitique locale='en' />;
