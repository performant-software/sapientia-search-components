import { Meta } from "@storybook/react";
import SuppliquePolitique from '../components/SuppliquePolitique';

export default {
  component: SuppliquePolitique,
  title: 'SearchComponents/Supplique Politique',
} as Meta;

export const Default: React.FC = () => <SuppliquePolitique locale='fr' />;
