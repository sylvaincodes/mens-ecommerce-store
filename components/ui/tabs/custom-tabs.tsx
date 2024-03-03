import React from "react";
import { Row } from "../row";
import CustomTabsItems from "./custom-tabs-items";

export default function CustomTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: any;
}) {

return (
    <Row classPlus="flex text-sm font-medium text-center justify-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 w-full">
      <ul className="flex md:gap-x-12">
        <CustomTabsItems activeTab={activeTab}  setActiveTab={setActiveTab} title="dresses" />
        <CustomTabsItems activeTab={activeTab}  setActiveTab={setActiveTab} title="pajamas" />
        <CustomTabsItems activeTab={activeTab}  setActiveTab={setActiveTab} title="others" />
      </ul>
    </Row>
  );
}
