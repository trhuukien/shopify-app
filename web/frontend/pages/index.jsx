import {
  Card,
  Page,
  Layout,
  Text
} from "@shopify/polaris";
import { AllCaughtUp } from "../components/footer/index";

export default function Index() {
  return (
    <Page title="Shopify App">
      <Layout>
        <Layout.Section>
          <p>Create by Kizchann..</p>
        </Layout.Section>

        <Layout.Section>
          <AllCaughtUp />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
