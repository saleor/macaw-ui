import { Meta, StoryFn } from "@storybook/react";
import {
  Box,
  Button,
  Chip,
  Combobox,
  Input,
  Text,
  TrashBinIcon,
} from "~/components";
import { classNames } from "~/utils";
import {
  RoundedActionBox,
  RoundedBox,
  RoundedBoxWithFooter,
} from "../RoundedActionBox/RoundedActionBox";
import { Table, Thead, Tr, Th, Tbody, Td } from "../Table/Table";
import { AppLayout, AppLayoutRow } from "./AppLayout";
import { dropdownColumnTd, statusColumnTd, td } from "./AppLayout.stories.css";

const meta: Meta<typeof AppLayout> = {
  title: "Templates / AppLayout",
};

export default meta;

export const ConfigurationsListPage: StoryFn = () => (
  <AppLayout title="Stripe">
    <AppLayoutRow
      title="Stripe Configurations"
      description="Create Stripe configurations that can be later assigned to Saleor channels."
    >
      <RoundedActionBox>
        <Box>
          <Text as="p" variant="body" size="medium" color="textCriticalDefault">
            No Stripe configurations added.
          </Text>
          <Text as="p" variant="body" size="medium" color="textCriticalDefault">
            This means payments are not processed by Stripe.
          </Text>
        </Box>
        <Button as="a" size="large" variant="primary">
          Add new configuration
        </Button>
      </RoundedActionBox>
    </AppLayoutRow>
    <AppLayoutRow
      title="Saleor channel mappings"
      description={
        <Box>
          <Text as="p" variant="body" size="medium">
            Assign Stripe configurations to Saleor channels.
          </Text>
          <Box marginTop={6}>
            <Text
              as="p"
              variant="body"
              size="medium"
              color="textCriticalDefault"
            >
              No channels have configurations assigned.
            </Text>
            <Text
              as="p"
              variant="body"
              size="medium"
              color="textCriticalDefault"
            >
              This means payments are not processed by Stripe.
            </Text>
          </Box>
        </Box>
      }
    >
      <RoundedBox>
        <Box paddingX={6} paddingTop={4} paddingBottom={6} display="flex">
          <Table>
            <Thead>
              <Tr>
                <Th>Saleor Channel</Th>
                <Th className={dropdownColumnTd}>Configuration</Th>
                <Th className={statusColumnTd}>
                  <span className="visually-hidden">Status</span>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className={td}>
                  <Text
                    variant="bodyStrong"
                    size="medium"
                    color="textNeutralDisabled"
                  >
                    Default Channel
                  </Text>
                </Td>
                <Td className={classNames(td, dropdownColumnTd)}>
                  <Combobox
                    label="Configuration name"
                    size="small"
                    options={[
                      { value: "", label: "(disabled)" },
                      {
                        value: "eu",
                        label: "Configuration for Europe",
                      },
                      { value: "us", label: "US and A" },
                    ]}
                    value={null}
                  />
                </Td>
                <Td className={classNames(td, statusColumnTd)}>
                  <Chip size="medium" backgroundColor="surfaceNeutralHighlight">
                    <Text size="small" variant="caption">
                      Disabled
                    </Text>
                  </Chip>
                </Td>
              </Tr>
              <Tr>
                <Td className={td}>
                  <Text
                    variant="bodyStrong"
                    size="medium"
                    color={"textNeutralDefault"}
                  >
                    USA
                  </Text>
                </Td>
                <Td className={classNames(td, dropdownColumnTd)}>
                  <Combobox
                    label="Configuration name"
                    size="small"
                    options={[
                      { value: "", label: "(disabled)" },
                      {
                        value: "eu",
                        label: "Configuration for Europe",
                      },
                      { value: "us", label: "US and A" },
                    ]}
                    value={{ value: "us", label: "US and A" }}
                  />
                </Td>
                <Td className={classNames(td, statusColumnTd)}>
                  <Chip
                    size="medium"
                    backgroundColor="decorativeSurfaceSubdued2"
                    borderColor="neutralHighlight"
                  >
                    <Text
                      color="text2Decorative"
                      size="small"
                      variant="caption"
                    >
                      Production Key
                    </Text>
                  </Chip>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </RoundedBox>
    </AppLayoutRow>
  </AppLayout>
);

export const ConfigurationPage: StoryFn = () => (
  <AppLayout
    title="Stripe > Add configuration"
    description={
      <>
        <Text as="p" variant="body" size="medium">
          Edit Stripe configuration.
        </Text>
        <Text as="p" variant="body" size="medium">
          Note: Stripe Webhooks will be created automatically.
        </Text>
      </>
    }
  >
    <AppLayoutRow
      title="Stripe Credentials"
      description="Enter Private API Key from Stripe."
    >
      <RoundedBoxWithFooter
        as="form"
        method="POST"
        autoComplete="off"
        footer={
          <Box display="flex" flexDirection="row" columnGap={4}>
            <Button variant="primary" size="medium" type="submit">
              Save
            </Button>
          </Box>
        }
      >
        <Box
          paddingBottom={6}
          rowGap={4}
          display="flex"
          flexDirection="column"
          width="100%"
        >
          <Input
            label="Configuration name"
            helperText="Enter configuration name that uniquely identifies this configuration. This name will be used later to assign configuration to Saleor Channels."
            name="configurationName"
            autoComplete="off"
            size="medium"
          />
          <Input
            type="password"
            autoComplete="off"
            label="Secret Key"
            name="secretKey"
            size="medium"
          />
          <Input
            autoComplete="off"
            label="Publishable Key"
            name="publishableKey"
            size="medium"
          />
        </Box>
      </RoundedBoxWithFooter>
    </AppLayoutRow>
    <AppLayoutRow error={true} title="Danger zone">
      <RoundedBoxWithFooter
        error={true}
        footer={
          <Box display="flex" flexDirection="row" width="100%">
            <Button
              type="button"
              size="medium"
              variant="error"
              icon={<TrashBinIcon />}
            >
              Delete configuration
            </Button>
          </Box>
        }
      >
        <Box paddingBottom={6} rowGap={6} display="flex" flexDirection="column">
          <Text as="h3" variant="heading" size="medium">
            Remove configuration
          </Text>
          <Box display="flex" flexDirection="column" rowGap={5}>
            <Text as="p" variant="body" size="medium">
              You can remove the configuration{" "}
              <Text as="strong" variant="bodyStrong" size="medium">
                TEST CONFIGURATION
              </Text>
            </Text>
            <Text as="p" variant="body" size="medium">
              This operation will permanently remove all settings related to
              this configuration and disable Stripe in all assigned channels.
            </Text>
            <Text as="p" variant="body" size="medium">
              This operation cannot be undone.{" "}
            </Text>
          </Box>
        </Box>
      </RoundedBoxWithFooter>
    </AppLayoutRow>
  </AppLayout>
);
