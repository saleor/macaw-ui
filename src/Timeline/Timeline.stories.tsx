import { storiesOf } from "@storybook/react";
import React from "react";

import Timeline from "./Timeline";
import TimelineEvent from "./TimelineEvent";
import TimelineNote from "./TimelineNote";

storiesOf("Timeline", module)
  .addDecorator(storyFn => (
    <div style={{ margin: "auto", width: 700 }}>{storyFn()}</div>
  ))
  .add("default", () => (
    <Timeline>
      <TimelineEvent date="2018-05-07T16:58:02+00:00" title="Dummy text 1" />
      <TimelineEvent date="2018-05-07T16:48:02+00:00" title="Dummy text 2" />
      <TimelineEvent date="2018-05-06T16:58:02+00:00" title="Dummy text 3" />
    </Timeline>
  ))
  .add("expansion panels", () => (
    <Timeline>
      <TimelineEvent date="2018-05-07T16:58:02+00:00" title="Expansion panel 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TimelineEvent>
      <TimelineEvent date="2018-05-07T16:48:02+00:00" title="Expansion panel 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TimelineEvent>
      <TimelineEvent date="2018-05-06T16:58:02+00:00" title="Expansion panel 3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TimelineEvent>
    </Timeline>
  ))
  .add("notes", () => (
    <Timeline>
      <TimelineEvent date="2018-05-07T16:58:02+00:00" title="Expansion panel 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TimelineEvent>
      <TimelineNote
        date="2018-05-07T16:58:02+00:00"
        email="admin@example.com"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <TimelineNote
        date="2018-05-07T16:58:02+00:00"
        email="ceo@example.com"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <TimelineEvent date="2018-05-06T16:58:02+00:00" title="Expansion panel 3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TimelineEvent>
    </Timeline>
  ));
