import {
  Card,
  Page,
  Layout,
  Text,
  InlineGrid,
  Box,
  FormLayout,
  TextField,
  ButtonGroup,
  Button,
  BlockStack,
  InlineStack,
  Loading,
  Frame
} from "@shopify/polaris";
import { LearnMore } from "../components/footer/index";
import { useConfig } from "../hooks/useConfig";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Index() {
  const { config, loading, save, saveLoading } = useConfig(['settings/demo']);
  const demoData = useMemo(() => {
    return config?.['settings/demo'];
  }, [config]);
  const [formData, setFormData] = useState({
    text1: demoData?.text1,
    text2: demoData?.text2,
    text3: demoData?.text3,
    text4: demoData?.text4,
  });

  useEffect(() => {
    setFormData({
      text1: demoData?.text1,
      text2: demoData?.text2,
      text3: demoData?.text3,
      text4: demoData?.text4,
    });
  }, [demoData]);
  const handleChange = useCallback((name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  const handleSave =  useCallback(async () => {
    await save([{ path: 'settings/demo', value: formData }]);
  }, [formData]);

  return (
    <Page
      title="General Config"
      backAction={{content: 'Home', url: '/'}}
      primaryAction={{
        content: 'Save',
        loading: saveLoading,
        onAction: handleSave,
        disabled: loading
      }}
      secondaryActions={[
        {content: 'View on your store'},
      ]}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap='600'>
            <InlineGrid columns={{ xs: '1fr', md: '2fr 5fr' }} gap='400'>
              <Box as='section' paddingInlineStart={{ xs: '400', sm: '0' }} paddingInlineEnd={{ xs: '400', sm: '0' }}>
                <BlockStack gap='400'>
                  <Text as='h3' variant='headingMd'>
                    Authenticate
                  </Text>
                  <Text as='p' variant='bodyMd'>
                    Access Information
                  </Text>
                </BlockStack>
              </Box>
              <Card roundedAbove='sm'>
                <FormLayout>
                  <TextField
                    label="Config 1"
                    onChange={(value) => handleChange('text1', value)}
                    autoComplete="off"
                    value={formData?.text1}
                  />
                  <FormLayout.Group condensed>
                    <TextField
                      type="number"
                      label="Config 2"
                      onChange={(value) => handleChange('text2', value)}
                      autoComplete="off"
                      value={formData?.text2}
                    />
                    <TextField
                      type="number"
                      label="Config 3"
                      onChange={(value) => handleChange('text3', value)}
                      autoComplete="off"
                      value={formData?.text3}
                    />
                  </FormLayout.Group>
                  <TextField
                    label="Config 4"
                    onChange={(value) => handleChange('text4', value)}
                    autoComplete="off"
                    value={formData?.text4}
                  />
                </FormLayout>
              </Card>
            </InlineGrid>

            <InlineStack align="end">
              <ButtonGroup>
                <Button variant="primary" onClick={handleSave} loading={saveLoading} disabled={loading}>Save</Button>
              </ButtonGroup>
            </InlineStack>
          </BlockStack>
        </Layout.Section>

        <Layout.Section>
          <LearnMore />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
