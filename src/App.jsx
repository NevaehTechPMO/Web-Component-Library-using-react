import "./App.css";
import { useState } from "react";
import { useRef, useEffect } from "react";
import "./web-component-library/Card.js";
import "./web-component-library/Multi_option_dropdown.js";
import "./web-component-library/Single_option_dropdown.js";
import "./web-component-library/Button.js";
import "./web-component-library/Menu.js";
import "./web-component-library/Table.js";
import "./web-component-library/Table2.js";
import Icon from "./assets/react.svg";
import sIcon from "./assets/img.png";
import ButtonIcon from "./images/Vector.png";
import aICon from "./images/Ascending.png";
import dICon from "./images/Decending.png";
import deIcon from "./images/Default.png";
import StateExpand from "./images/State_Expand.svg";
import StateCollapse from "./images/State_Collapse.svg";
import DashboardDefault from "./images/Dashboard_Default.svg";
import ProjectManagementDefault from "./images/Project_Management_Default.svg";
import UserManagementDefault from "./images/user_Management_Default.svg";
import DashboardSelected from "./images/Dashboard_Selected.svg";
import ProjectManagementSelected from "./images/Project_Management_Selected.svg";
import UserManagementSelected from "./images/User_Management_Selected.svg";
import "./web-component-library/Header.js";
import "./web-component-library/TopHeader.js";
import "./web-component-library/Dropdown_last_option_seperate.js";
import "./web-component-library/Multi_group_dropdown.js";
import "./web-component-library/toggle_dropdown.js";
import "./web-component-library/pagination.js";
import "./web-component-library/popup.js";
//import "./JSComponent/Calender.js";
import "./web-component-library/VersionHistory.js";
import "./web-component-library/search.js";
import "./web-component-library/CardOfDashboard.js";
import "./web-component-library/BarGraph.js";
import "./web-component-library/popup2.js";
function App() {
  //card 1
  const [Value, setValue] = useState(2356);
  const [heading, setHeading] = useState("Batches in-progress");
  const [deed_or_batch_info, set_deed_or_batch_info] =
    useState("Total Batches");
  const [Total, setTotal] = useState(15000);
  const [logo, setLogo] = useState(Icon);

  function updatedec() {
    setInterval(() => {
      setValue(10);
    }, 1000);
    setInterval(() => {
      setHeading("Total Deeds Scanned");
    }, 2000);
    setInterval(() => {
      set_deed_or_batch_info("Total Deed Processed");
    }, 3000);
    setTotal(1400);
    setLogo(sIcon);
  }

  //card 2
  const [name1, setName1] = useState("Deed Count");
  const [DeedCount, setDeedCount] = useState(2654);
  const [name2, setName2] = useState("Image count");
  const [ImageCount, setImageCount] = useState(150000);
  const [Stage, setStage] = useState("Uploaded");
  const updateCard = () => {
    setName1("Deed Count");
    setDeedCount(2000);
    setName2("Image count");
    setImageCount(140000);
    setStage("UAT-1");
  };

  const togglename = "All Districts";
  const toggleicon = "fa fa-chevron-down dropdown-icon";
  // const button1 = "All";
  // const button2 = "Nevaeh";
  // const button3 = "Youth";

  // for dropdowns
  const data = {
    hello: [
      { name: "today", value: "Today" },
      { name: "yesterday", value: "Yesterday" },
      { name: "yesterday1", value: "Yesterday1" },
      { name: "yesterday2", value: "Yesterday2" },
      { name: "yesterday3", value: "Yesterday3" },
    ],
    hello2: [{ name: "this month", value: "This Month" }],
    hello3: [
      { name: "today", value: "Today" },
      { name: "yesterday", value: "Yesterday" },
      { name: "yesterday1", value: "Yesterday1" },
      { name: "yesterday2", value: "Yesterday2" },
      { name: "yesterday3", value: "Yesterday3" },
    ],
  };
  const data2 = [
    { name: "today1", value: "Today1" },
    {
      name: "this month",
      value: "This Month",
    },
    { name: "custom", value: "Custom" },
  ];
  const data3 = [
    { name: "Today", value: "Today" },
    { name: "Yesterday", value: "Yesterday" },
    {
      name: "This Month",
      value: "This Month",
    },
    { name: "Last 7 days", value: "Last 7 days" },
    { name: "This Year", value: "This Year" },
    {
      name: "Custom Date",
      value: "Custom Date",
      icon: "fa-solid fa-calendar-days",
    },
  ];

  //for Menu
  const project_title = "e-Sangrakshan 2.0";
  const username = "WTL Officer";
  const menu_state_expand = StateExpand;
  const menu_state_collapse = StateCollapse;
  const menu = [
    {
      label: "Alphabet",
      value: "A",
      iconBeforeDefault: DashboardDefault,
      iconBeforeSelected: DashboardSelected,
      iconAfter: "fa-solid fa-angle-down",
      iconToggle: "fa-solid fa-angle-up",
      submenu: [
        { label: "A", value: "Apple" },
        { label: "B", value: "Ball" },
        { label: "C", value: "Cat" },
        { label: "D", value: "Dog" },
      ],
    },
    {
      label: "Numeric",
      value: "N",
      iconBeforeDefault: ProjectManagementDefault,
      iconBeforeSelected: ProjectManagementSelected,
      iconAfter: "fa-solid fa-angle-down",
      iconToggle: "fa-solid fa-angle-up",
      submenu: [
        { label: "1", value: "11" },
        { label: "2", value: "22" },
      ],
    },
    {
      label: "Others",
      value: "O",
      iconBeforeDefault: UserManagementDefault,
      iconBeforeSelected: UserManagementSelected,
    },
    {
      label: "Assignments",
      value: "O",
      iconBeforeDefault: UserManagementDefault,
      iconBeforeSelected: UserManagementSelected,
    },
    {
      label: "Approved Job",
      value: "AJ",
      iconBeforeDefault: ProjectManagementDefault,
      iconBeforeSelected: ProjectManagementSelected,
    },
    {
      label: "Payment Done",
      value: "PD",
      iconBeforeDefault: ProjectManagementDefault,
      iconBeforeSelected: ProjectManagementSelected,
    },
    {
      label: "Tools",
      value: "T",
      iconBeforeDefault: ProjectManagementDefault,
      iconBeforeSelected: ProjectManagementSelected,
    },
    {
      label: "Reports",
      value: "R",
      iconBeforeDefault: ProjectManagementDefault,
      iconBeforeSelected: ProjectManagementSelected,
    },
    {
      label: "Help",
      value: "H",
      iconBeforeDefault: ProjectManagementDefault,
      iconBeforeSelected: ProjectManagementSelected,
    },
  ];

  // for table
  const headerConfig = [
    [
      {
        label: "id",
        key: "id",
      },
      {
        label: "District/RO Name",
        key: "Name",
        rowspan: 2,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "Deeds Processed",
        rowspan: 1,
        colspan: 7,
      },

      {
        label: "Exception",
        key: "exception",
        rowspan: 2,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "HoverItem",
        key: "HoverItem",
      },
    ],
    [
      {
        label: "Deeds Upload",
        key: "deedsUpload",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "Data Entry",
        key: "dataEntry",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "QC1",
        key: "qc1",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "QC2",
        key: "qc2",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "Transfer",
        key: "transfer",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "Transfer2",
        key: "transfer2",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
      {
        label: "Transfer3",
        key: "transfer3",
        rowspan: 1,
        colspan: 1,
        icon0: deIcon,
        icon1: aICon,
        icon2: dICon,
      },
    ],
  ];

  const tablename = "District/RO Wise Report";
  const total_district = 23;
  //for popup 1 which is in table
  const list_for_popup = [
    { id: "a", name: 1 },
    { id: "b", name: 2 },
    { id: "c", name: 3 },
    { id: "d", name: 4 },
  ];
  //for popup 2 which is in table
  const item_for_popup2 = [
    "Alipurduar",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ];
  const flatData = [
    {
      id: "a1",
      Name: "Kolkata",
      deedsUpload: 3000,
      dataEntry: 2000,
      qc1: 3000,
      qc2: 2000,
      transfer: 200,
      transfer2: 100,
      transfer3: 100,
      exception: 100000000,
      Progress: 90,
      subrows: [
        {
          id: "a11",
          Name: "A.R.A I Kolkata",
          deedsUpload: 300,
          dataEntry: 200,
          qc1: 300,
          qc2: 200,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 10,
          //  Progress: 50,
          HoverItem: [
            { id: "e", name: 1 },
            { id: "f", name: 2 },
            { id: "g", name: 3 },
            { id: "h", name: 4 },
          ],
        },
        {
          id: "a12",
          Name: "A.R.A II Kolkata",
          deedsUpload: 600,
          dataEntry: 400,
          qc1: 600,
          qc2: 400,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 20,
          //Progress: 90,
          HoverItem: [
            { id: "e", name: 1 },
            { id: "f", name: 2 },
            { id: "g", name: 3 },
            { id: "h", name: 4 },
          ],
        },
      ],
      HoverItem: [
        { id: "e", name: 1 },
        { id: "f", name: 2 },
        { id: "g", name: 3 },
        { id: "h", name: 4 },
        { id: "ef", name: 5 },
        { id: "gh", name: 6 },
      ],
    },
    {
      id: "b2",
      Name: "Nadia",
      deedsUpload: 4000,
      dataEntry: 3000,
      qc1: 2000,
      qc2: 1000,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 200,
      // Progress: 90,
      subrows: [
        {
          id: "b21",
          Name: "A.R.A I Nadia",
          deedsUpload: 600,
          dataEntry: 400,
          qc1: 600,
          qc2: 400,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 20,
          //  Progress: 90,
          HoverItem: [
            { id: "i", name: 1 },
            { id: "j", name: 2 },
            { id: "k", name: 3 },
            { id: "l", name: 4 },
          ],
        },
        {
          id: "b22",
          Name: "A.R.A II Nadia",
          deedsUpload: 300,
          dataEntry: 900,
          qc1: 500,
          qc2: 700,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 40,
          // Progress: 78,
          HoverItem: [
            { id: "i", name: 1 },
            { id: "j", name: 2 },
            { id: "k", name: 3 },
            { id: "l", name: 4 },
          ],
        },
      ],
      HoverItem: [
        { id: "i", name: 1 },
        { id: "j", name: 2 },
        { id: "k", name: 3 },
        { id: "l", name: 4 },
      ],
    },
    {
      id: "c3",
      Name: "Jhargram",
      deedsUpload: 5000,
      dataEntry: 7000,
      qc1: 9000,
      qc2: 2000,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 700,
      //  Progress: 40,
      subrows: [
        {
          id: "c31",
          Name: "A.R.A I Jhargram",
          deedsUpload: 800,
          dataEntry: 200,
          qc1: 400,
          qc2: 300,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 70,
          //  Progress: 33,
          HoverItem: [
            { id: "m", name: 1 },
            { id: "n", name: 2 },
            { id: "o", name: 3 },
            { id: "p", name: 4 },
          ],
        },
      ],
      HoverItem: [
        { id: "m", name: 1 },
        { id: "n", name: 2 },
        { id: "o", name: 3 },
        { id: "p", name: 4 },
      ],
    },

    {
      id: "d4",
      Name: "Howrah",
      deedsUpload: 3500,
      dataEntry: 2500,
      qc1: 2800,
      qc2: 1800,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 150,
      //  Progress: 85,
      subrows: [
        {
          id: "d41",
          Name: "A.R.A I Howrah",
          deedsUpload: 400,
          dataEntry: 300,
          qc1: 400,
          qc2: 300,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 15,
          //  Progress: 60,
          HoverItem: [
            { id: "q", name: 1 },
            { id: "r", name: 2 },
            { id: "s", name: 3 },
            { id: "t", name: 4 },
          ],
        },
      ],
      HoverItem: [
        { id: "q", name: 1 },
        { id: "r", name: 2 },
        { id: "s", name: 3 },
        { id: "t", name: 4 },
      ],
    },
    {
      id: "e5",
      Name: "Hooghly",
      deedsUpload: 4200,
      dataEntry: 3100,
      qc1: 2900,
      qc2: 1200,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 180,
      //  Progress: 88,
      HoverItem: [
        { id: "u", name: 1 },
        { id: "v", name: 2 },
        { id: "w", name: 3 },
        { id: "x", name: 4 },
      ],
    },

    {
      id: "f6",
      Name: "Burdwan",
      deedsUpload: 5000,
      dataEntry: 4000,
      qc1: 3500,
      qc2: 3000,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 250,
      //  Progress: 95,
      HoverItem: [
        { id: "y", name: 1 },
        { id: "z", name: 2 },
        { id: "aa", name: 3 },
        { id: "bb", name: 4 },
      ],
    },
    {
      id: "g7",
      Name: "Jalpaiguri",
      deedsUpload: 3000,
      dataEntry: 5000,
      qc1: 3600,
      qc2: 4000,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 290,
      //  Progress: 52,
      subrows: [
        {
          id: "g71",
          Name: "A.R.A I Jalpaiguri",
          deedsUpload: 500,
          dataEntry: 100,
          qc1: 700,
          qc2: 400,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 19,
          //  Progress: 10,
          HoverItem: [
            { id: "cc", name: 1 },
            { id: "dd", name: 2 },
            { id: "ee", name: 3 },
            { id: "ff", name: 4 },
          ],
        },
        {
          id: "g72",
          Name: "A.R.A II Jalpaiguri",
          deedsUpload: 400,
          dataEntry: 800,
          qc1: 800,
          qc2: 200,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 45,
          //  Progress: 58,
          HoverItem: [
            { id: "cc", name: 1 },
            { id: "dd", name: 2 },
            { id: "ee", name: 3 },
            { id: "ff", name: 4 },
          ],
        },
      ],
      HoverItem: [
        { id: "cc", name: 1 },
        { id: "dd", name: 2 },
        { id: "ee", name: 3 },
        { id: "ff", name: 4 },
      ],
    },

    {
      id: "h8",
      Name: "Malda",
      deedsUpload: 6000,
      dataEntry: 9000,
      qc1: 3100,
      qc2: 3900,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 250,
      //  Progress: 95,
      subrows: [
        {
          id: "h81",
          Name: "A.R.A I Malda",
          deedsUpload: 500,
          dataEntry: 100,
          qc1: 700,
          qc2: 400,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 19,
          //  Progress: 10,
          HoverItem: [
            { id: "gg", name: 1 },
            { id: "hh", name: 2 },
            { id: "ii", name: 3 },
            { id: "jj", name: 4 },
          ],
        },
        {
          id: "h82",
          Name: "A.R.A II Malda",
          deedsUpload: 400,
          dataEntry: 800,
          qc1: 800,
          qc2: 200,
          transfer: 100,
          transfer2: 100,
          transfer3: 100,
          exception: 45,
          //  Progress: 58,
          HoverItem: [
            { id: "gg", name: 1 },
            { id: "hh", name: 2 },
            { id: "ii", name: 3 },
            { id: "jj", name: 4 },
          ],
        },
      ],
      HoverItem: [
        { id: "gg", name: 1 },
        { id: "hh", name: 2 },
        { id: "ii", name: 3 },
        { id: "jj", name: 4 },
      ],
    },
    {
      id: "i9",
      Name: "Mushirdabad",
      deedsUpload: 3000,
      dataEntry: 5000,
      qc1: 3600,
      qc2: 4000,
      transfer: 100,
      transfer2: 100,
      transfer3: 100,
      exception: 290,
      //  Progress: 52,
      HoverItem: [
        { id: "kk", name: 1 },
        { id: "ll", name: 2 },
        { id: "mm", name: 3 },
        { id: "nn", name: 4 },
      ],
    },
  ];

  const [count1, setCount1] = useState(0);
  function splitIntoTables(data, max) {
    const tables = [];
    for (let i = 0; i < data.length; i += max) {
      tables.push(data.slice(i, i + max));
    }
    return tables;
  }
  const allTablesData = splitIntoTables(flatData, 3);
  useEffect(() => {
    setCount1(allTablesData.length);
  }, [allTablesData]);
  const [currentTableData, setCurrentTableData] = useState(allTablesData[0]);

  //version history
  const versions = [
    { version: "v3", date: "09 Sep 2025, 04:20am", user: "User name" },
    { version: "v4", date: "15 Sep 2025, 03:10pm", user: "User name" },
    { version: "v5", date: "30 Sep 2025, 03:10pm", user: "User name" },
    { version: "v6", date: "01 Oct 2025, 03:10pm", user: "User name" },
    { version: "v7", date: "03 Nov 2025, 03:10pm", user: "User name" },
    { version: "v8", date: "03 Oct 2025, 03:10pm", user: "User name" },
    { version: "v9", date: "12 Oct 2025, 12:09am", user: "User name" },
    { version: "v10", date: "25 Oct 2025, 03:10pm", user: "User name" },
  ];

  // for search component
  let suggestion1 = [
    { name: "Hello", value: "1" },
    { name: "Mateo", value: "2" },
    { name: "Leo", value: "3" },
    { name: "Theo", value: "4" },
    { name: "Theodore", value: "5" },
    { name: "Matteo", value: "6" },
    { name: "Leonardo", value: "7" },
    { name: "Leon", value: "8" },
    { name: "George", value: "9" },
  ];
  let suggestion2 = [
    { name: "xy", value: "2" },
    { name: "wxy", value: "3" },
    { name: "wxyz", value: "4" },
    { name: "zzz", value: "5" },
  ];

  // const headerConfig_for_version = [
  //   [
  //     {
  //       label: "Image No",
  //       key: "ImageNo",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //     {
  //       label: "Change Type",
  //       key: "ChangeType",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //     {
  //       label: "Changes In",
  //       key: "ChangesIn",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //     {
  //       label: "Field Name",
  //       key: "FieldName",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //     {
  //       label: "Data Entry Stage",
  //       key: "DataEntryStage",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //     {
  //       label: "Changes In QC1",
  //       key: "ChangesInQC1",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //     {
  //       label: "Changes In QC2",
  //       key: "ChangesInQC2",
  //       rowspan: 2,
  //       colspan: 1,
  //     },
  //   ],
  // ];

  // const tablename_for_version = "Kolkata";
  // const flatData_for_version = [
  //   {
  //     ImageNo: "00001",
  //     ChangeType: "Update",
  //     ChangesIn: "Deed Details",
  //     FieldName: "Select major trans Type",
  //     DataEntryStage: "Sale",
  //     ChangesInQC1: "Gift",
  //     ChangesInQC2: "No Changes",
  //   },
  //   {
  //     ImageNo: "00002",
  //     ChangeType: "Delete",
  //     ChangesIn: "Deed Details",
  //     FieldName: "Select Interest",
  //     DataEntryStage: "Doner/Donee",
  //     ChangesInQC1: "Vendor/Vendee",
  //     ChangesInQC2: "No Changes",
  //   },
  //   {
  //     ImageNo: "00003",
  //     ChangeType: "Modify",
  //     ChangesIn: "Property Details",
  //     FieldName: "Enter JL No.",
  //     DataEntryStage: "1",
  //     ChangesInQC1: "2",
  //     ChangesInQC2: "4",
  //   },
  //   {
  //     ImageNo: "00005",
  //     ChangeType: "Create",
  //     ChangesIn: "Person Details",
  //     FieldName: "Person",
  //     DataEntryStage: "Nil",
  //     ChangesInQC1: "Person added",
  //     ChangesInQC2: "No Changes",
  //   },
  //   {
  //     ImageNo: "00006",
  //     ChangeType: "Create",
  //     ChangesIn: "Property Details",
  //     FieldName: "Area Type",
  //     DataEntryStage: "GP",
  //     ChangesInQC1: "MUNI",
  //     ChangesInQC2: "NIL",
  //   },
  // ];

  // const [count_for_version, setCount_for_version] = useState(0);
  // function splitIntoTables(data, max) {
  //   const tables = [];
  //   for (let i = 0; i < data.length; i += max) {
  //     tables.push(data.slice(i, i + max));
  //   }
  //   return tables;
  // }
  // const allTablesData_version = splitIntoTables(flatData_for_version, 3);
  // useEffect(() => {
  //   setCount_for_version(allTablesData_version.length);
  // }, [allTablesData_version]);
  // const [currentTableData_version, setCurrentTableData_version] = useState(
  //   allTablesData_version[0]
  // );

  // const headerConfig2 = [
  //   [
  //     {
  //       label: "Deeds Id",
  //       key: "DeedsId",
  //       rowspan: 2,
  //       colspan: 1,
  //       icon1: aICon,
  //       icon2: dICon,
  //     },
  //     {
  //       label: "Deed Year",
  //       key: "DeedYear",
  //       rowspan: 2,
  //       colspan: 1,
  //       icon1: aICon,
  //       icon2: dICon,
  //     },
  //     {
  //       label: "Book Type",
  //       key: "BookType",
  //       rowspan: 2,
  //       colspan: 1,
  //       icon1: aICon,
  //       icon2: dICon,
  //     },
  //     {
  //       label: "Total Images",
  //       key: "TotalImages",
  //       rowspan: 2,
  //       colspan: 1,
  //       icon1: aICon,
  //       icon2: dICon,
  //     },
  //     {
  //       label: "Stage",
  //       key: "Stage",
  //       rowspan: 2,
  //       colspan: 1,
  //       icon1: aICon,
  //       icon2: dICon,
  //     },
  //     {
  //       label: "Exception",
  //       key: "Exception",
  //       rowspan: 2,
  //       colspan: 1,
  //       icon1: aICon,
  //       icon2: dICon,
  //     },
  //   ],
  // ];

  // const tablename2 = "Kolkata";
  // const flatData2 = [
  //   {
  //     DeedsId: 12345,
  //     DeedYear: 1970,
  //     BookType: "I",
  //     TotalImages: 20,
  //     Stage: "Deeds Upload",
  //     Exception: 20,
  //   },
  //   {
  //     DeedsId: 123456789081,
  //     DeedYear: 1972,
  //     BookType: "III",
  //     TotalImages: 30,
  //     Stage: "Data Entry",
  //     Exception: 25,
  //   },
  //   {
  //     DeedsId: 123456789082,
  //     DeedYear: 1975,
  //     BookType: "II",
  //     TotalImages: 56,
  //     Stage: "qc1",
  //     Exception: 0,
  //   },

  //   {
  //     DeedsId: 123456789070,
  //     DeedYear: 1960,
  //     BookType: "I",
  //     TotalImages: 30,
  //     Stage: "Deeds Upload",
  //     Exception: 50,
  //   },
  //   {
  //     DeedsId: 123456789071,
  //     DeedYear: 1962,
  //     BookType: "III",
  //     TotalImages: 35,
  //     Stage: "Data Entry",
  //     Exception: 21,
  //   },
  //   {
  //     DeedsId: 123456789082,
  //     DeedYear: 1975,
  //     BookType: "II",
  //     TotalImages: 46,
  //     Stage: "qc1",
  //     Exception: 0,
  //   },

  //   {
  //     DeedsId: 123456789090,
  //     DeedYear: 1990,
  //     BookType: "I",
  //     TotalImages: 50,
  //     Stage: "Deeds Upload",
  //     Exception: 29,
  //   },
  //   {
  //     DeedsId: 123456789091,
  //     DeedYear: 1992,
  //     BookType: "III",
  //     TotalImages: 32,
  //     Stage: "Data Entry",
  //     Exception: 85,
  //   },
  //   {
  //     DeedsId: 123456789092,
  //     DeedYear: 1995,
  //     BookType: "II",
  //     TotalImages: 65,
  //     Stage: "qc1",
  //     Exception: 0,
  //   },

  //   {
  //     DeedsId: 123456789060990,
  //     DeedYear: 1960,
  //     BookType: "I",
  //     TotalImages: 56,
  //     Stage: "Deeds Upload",
  //     Exception: 24,
  //   },
  //   {
  //     DeedsId: 123456789061,
  //     DeedYear: 1962,
  //     BookType: "III",
  //     TotalImages: 34,
  //     Stage: "Data Entry",
  //     Exception: 65,
  //   },
  //   {
  //     DeedsId: 123456789062,
  //     DeedYear: 1965,
  //     BookType: "II",
  //     TotalImages: 35,
  //     Stage: "qc1",
  //     Exception: 0,
  //   },
  // ];
  // const [count2, setCount2] = useState(0);
  // function splitIntoTables(data, max) {
  //   const tables = [];
  //   for (let i = 0; i < data.length; i += max) {
  //     tables.push(data.slice(i, i + max));
  //   }
  //   return tables;
  // }
  // const allTablesData2 = splitIntoTables(flatData2, 3);
  // useEffect(() => {
  //   setCount2(allTablesData2.length);
  // }, [allTablesData2]);
  // const [currentTableData2, setCurrentTableData2] = useState(allTablesData2[0]);

  const datalist = [
    [
      [500000, 100000, 1500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
    ],
    [
      [500000, 100000, 1500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
    ],
    [
      [500000, 100000, 1500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
    ],
    [
      [500000, 100000, 1500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
      [400000, 200000, 700000],
      [300000, 2500000, 600000],
      [200000, 600000, 500000],
    ],
  ];
  const stackbar = ["DE", "UAT2", "Transfer", "hello"];
  const category = [
    "Darjeeling",
    "South 24 prgs",
    "North 24 prgs",
    "Purulia",
    "Bankura",
    "Birbhum",
    "Kolkata",
  ];
  const booktype = ["Book I", "Book III", "Book IV"];
  const stack = ["one", "two", "three", "four", "five", "six"];
  const xaxistitle = "District";
  const yaxistitle = "Total Deed Count";

  // const handleClick = (e) => {
  //   console.log("Hello ", e.detail);
  //   alert("Button clicked!");
  // };
  const togglename1 = "All Districts";
  const togglename2 = "Select RO";
  const togglename3 = "Date";
  const buttonname = "Apply";
  const buttonRef = useRef(null);
  // const button1Ref = useRef(null);
  // const button2Ref = useRef(null);
  // const button3Ref = useRef(null);
  const CardRef = useRef(null);
  const Multi_option_dropdownRef = useRef(null);
  const Multi_group_dropdownRef = useRef(null);
  const dropdownLastOptionSeperateRef = useRef(null);
  const toggle_dropdownRef = useRef(null);
  const Single_option_dropdownRef = useRef(null);
  const table1Ref = useRef(null);
  const paginationRef = useRef(null);
  //const pagination2Ref = useRef(null);
  const popupRef = useRef(null);
  const menuRef = useRef(null);
  const VersionHistoryRef = useRef(null);
  const SearchRef = useRef(null);
  const [isApplied, setISApplied] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const buttonEl = buttonRef.current;
    const cardEl = CardRef.current;
    const Multi_option_dropdownEl = Multi_option_dropdownRef.current;
    const Multi_group_dropdownEl = Multi_group_dropdownRef.current;
    const Dropdown_last_option_separateEl =
      dropdownLastOptionSeperateRef.current;
    const Toggle_DropdownEl = toggle_dropdownRef.current;
    const Single_option_dropdownEl = Single_option_dropdownRef.current;
    const table1El = table1Ref.current;
    const paginationEl = paginationRef.current;
    //const paginationEl2 = pagination2Ref.current;
    const popupEl = popupRef.current;
    const menuEl = menuRef.current;
    const VersionHistoryEl = VersionHistoryRef.current;
    const searchEl = SearchRef.current;

    const handleClick = (e) => {
      console.log("Hello ", e.detail);
      // if (e.detail.isCollapsed) {
      //   setISApplied(true);
      // } else {
      //   setISApplied(false);
      // }
      alert("Button Clicked");
    };

    const handleSearch = (e) => {
      let newSuggestions = [];
      console.log(e.detail);
      if (e.detail === "e" || e.detail === "o") {
        newSuggestions = [...suggestion1];
      } else if (e.detail === "x" || e.detail === "z") {
        newSuggestions = [...suggestion2];
      }
      setSuggestions(newSuggestions);
    };

    // const handleRowClick = (e) => {
    //   const rowElement = e.detail;
    //   const rowName = rowElement.getAttribute("data-name");
    //   setSelectedRowName(rowName);
    // };

    const handlepagination = (e) => {
      setCurrentTableData(allTablesData[e.detail - 1]);
    };

    // const handlepagination2 = (e) => {
    //   setCurrentTableData_version(allTablesData_version[e.detail - 1]);
    // };

    const handleButton = (e) => {
      console.log(e.detail);
      alert("hello");
    };

    if (buttonEl) {
      buttonEl.addEventListener("buttonclick", handleButton);
    }
    if (cardEl) {
      cardEl.addEventListener("cardclick", handleClick);
    }
    if (Multi_option_dropdownEl) {
      Multi_option_dropdownEl.addEventListener("applyclick", handleClick);
    }
    if (Multi_group_dropdownEl) {
      Multi_group_dropdownEl.addEventListener("applyclick", handleClick);
    }
    if (Dropdown_last_option_separateEl) {
      Dropdown_last_option_separateEl.addEventListener(
        "applyclick",
        handleClick
      );
    }
    if (Toggle_DropdownEl) {
      Toggle_DropdownEl.addEventListener("applyclick", handleClick);
    }
    if (Single_option_dropdownEl) {
      Single_option_dropdownEl.addEventListener("applyclick", handleClick);
    }
    if (table1El) {
      table1El.addEventListener("rowclick", handleClick);
    }
    if (paginationEl) {
      paginationEl.addEventListener("paginationclick", handlepagination);
    }
    // if (paginationEl2) {
    //   paginationEl2.addEventListener("paginationclick", handlepagination2);
    // }
    if (menuEl) {
      menuEl.addEventListener("menuclick", handleClick);
    }
    if (VersionHistoryEl) {
      VersionHistoryEl.addEventListener("versionhistoryclick", handleClick);
    }
    if (searchEl) {
      searchEl.addEventListener("searchclick", handleSearch);
    }
    return () => {
      if (buttonEl) {
        buttonEl.removeEventListener("buttonclick", handleButton);
      }
      if (cardEl) {
        cardEl.removeEventListener("cardclick", handleClick);
      }
      if (Multi_option_dropdownEl) {
        Multi_option_dropdownEl.removeEventListener("applyclick", handleClick);
      }
      if (Multi_group_dropdownEl) {
        Multi_group_dropdownEl.removeEventListener("applyclick", handleClick);
      }
      if (Dropdown_last_option_separateEl) {
        Dropdown_last_option_separateEl.removeEventListener(
          "applyclick",
          handleClick
        );
      }
      if (Toggle_DropdownEl) {
        Toggle_DropdownEl.removeEventListener("applyclick", handleClick);
      }
      if (Single_option_dropdownEl) {
        Single_option_dropdownEl.removeEventListener("applyclick", handleClick);
      }
      if (table1El) {
        table1El.removeEventListener("rowclick", handleClick);
      }
      if (paginationEl) {
        paginationEl.removeEventListener("paginationclick", handlepagination);
      }
      // if (paginationEl2) {
      //   paginationEl2.removeEventListener("paginationclick", handlepagination2);
      // }
      if (menuEl) {
        menuEl.removeEventListener("menuclick", handleClick);
      }
      if (VersionHistoryEl) {
        VersionHistoryEl.removeEventListener(
          "versionhistoryclick",
          handleClick
        );
      }
      if (searchEl) {
        searchEl.removeEventListener("searchclick", handleSearch);
      }
    };
  }, []);

  useEffect(() => {
    SearchRef.current.setAttribute("options", JSON.stringify(suggestions));
  }, [suggestions]);
  //const [options] = useState(data);
  const [a, SetA] = useState(100);
  const [b, SetB] = useState(200);

  // useEffect(() => {
  //   const intervalA = setInterval(() => {
  //     SetA((preva) => preva + 10);
  //   }, 3000);

  //   const intervalB = setInterval(() => {
  //     SetB((prevb) => prevb + 100);
  //   }, 4000);

  //   return () => {
  //     clearInterval(intervalA);
  //     clearInterval(intervalB);
  //   };
  // }, []);

  const btn1 = "All";
  const btn2 = "Nevaeh";
  const btn3 = "Youth";

  const dropodwnWithCheckboxStyles = {
    "--dropdown-min-width": "10vw",
    "--dropdown-max-height": "70vh",
  };

  const TableStyles = {
    "--table-section-width": isApplied ? "94%" : "76%",
    "--table-section-margin-left": isApplied ? "6vw" : "22.6vw",
  };
  return (
    <>
      {/*Card*/}
      <card-template
        logo={logo}
        values={a}
        heading={heading}
        deed_or_batch_info={deed_or_batch_info}
        total_number={b}
        style={{ "--card-width": "30vw" }}
      ></card-template>
      <button onClick={updateCard}>Update</button>
      {/*Selectable Summary Card*/}
      <card-dashboard
        name1={"name1"}
        deedcount={DeedCount}
        name2={"name2"}
        imagecount={ImageCount}
        stage={Stage}
        ref={CardRef}
      ></card-dashboard>
      <custom-multi-group-dropdown
        togglename={togglename2}
        options={JSON.stringify(data)}
        toggleicon={toggleicon}
        buttonname={buttonname}
        // style={{
        //   "--dropdown-min-width": "0vw",
        //   "--dropdown-max-height": "70vh",
        // }}
        ref={Multi_group_dropdownRef}
      ></custom-multi-group-dropdown>
      <custom-multi-option-dropdown
        togglename={togglename1}
        options={JSON.stringify(data2)}
        toggleicon={toggleicon}
        buttonname={buttonname}
        ref={Multi_option_dropdownRef}
      ></custom-multi-option-dropdown>
      {/*Dynamic Dropdown Without Checkbox*/}
      <custom-single-option-dropdown
        options={JSON.stringify(data2)}
        togglename={togglename1}
        toggleicon={toggleicon}
        //style={dropodwnWithCheckboxStyles}
        ref={Single_option_dropdownRef}
      ></custom-single-option-dropdown>
      <custom-dropdown-last-option-separate
        options={JSON.stringify(data3)}
        togglename={togglename3}
        toggleicon={toggleicon}
        ref={dropdownLastOptionSeperateRef}
      ></custom-dropdown-last-option-separate>
      <custom-toggle-dropdown
        options={JSON.stringify(data3)}
        toggleicon={toggleicon}
        ref={toggle_dropdownRef}
      ></custom-toggle-dropdown>
      {/* Menu */}
      {/* <custom-menu
        project_title={project_title}
        menu_state_expand={menu_state_expand}
        menu_state_collapse={menu_state_collapse}
        menu={JSON.stringify(menu)}
        // onmenuclick={handleClick}
        ref={menuRef}
      ></custom-menu> */}
      {/*Button*/}
      <custom-button type="Primary-Capsule-Remove" ref={buttonRef}>
        <img src={ButtonIcon} /> Apply
      </custom-button>
      {/*Table*/}
      {/* <custom-topheader
        username={username}
        options={JSON.stringify(data3)}
      ></custom-topheader> */}

      {/*<custom-header>
        <custom-button slot="All" ref={button1Ref}>
          All
        </custom-button>
        <custom-button slot="Nevaeh" ref={button2Ref}>
          Nevaeh
        </custom-button>
        <custom-button slot="Youth" ref={button3Ref}>
          Youth
        </custom-button>
        <custom-dropdown-with-checkbox
          slot="dropdown1"
          togglename={togglename1}
          options={JSON.stringify(data2)}
          toggleicon={toggleicon}
          ref={Multi_option_dropdownRef}
        ></custom-dropdown-with-checkbox>
        <custom-dropdown-for-ro
          slot="dropdown2"
          togglename={togglename2}
          options={JSON.stringify(data)}
          toggleicon={toggleicon}
          ref={Multi_group_dropdownRef}
        ></custom-dropdown-for-ro>
        <custom-dropdown-last-option-separate
          slot="dropdown3"
          options={JSON.stringify(data3)}
          togglename={togglename3}
          toggleicon={toggleicon}
          ref={dropdownLastOptionSeperateRef}
        ></custom-dropdown-last-option-separate>
      </custom-header>*/}

      {/* <custom-search
        options={JSON.stringify(suggestions)}
        ref={SearchRef}
      ></custom-search> */}

      <custom-table
        tablename={tablename}
        total_district={total_district}
        total_district_hover={JSON.stringify(item_for_popup2)}
        headerconfig={JSON.stringify(headerConfig)}
        tabledata={JSON.stringify(currentTableData)}
        style={TableStyles}
        ref={table1Ref}
      >
        <custom-search
          slot="searchbox"
          options={JSON.stringify(suggestions)}
          ref={SearchRef}
        ></custom-search>
        <custom-pagination
          slot="pagination"
          ref={paginationRef}
          total-pages={3}
        ></custom-pagination>
      </custom-table>
      {/*  <custom-pagination total-pages={9}></custom-pagination>*/}
      <popup-table options={JSON.stringify(list_for_popup)}></popup-table>
      {/*  <custom-table2
        slot="nested-table"
        headerconfig={JSON.stringify(headerConfig2)}
        tabledata={JSON.stringify(currentTableData2)}
      >
        <custom-pagination
          slot="pagination"
          ref={pagination2Ref}
          // style={{ "--font-size": "1vw" }}
          total-pages={count2}
        ></custom-pagination>
      </custom-table2>*/}
      {/*<custom-table2
        headerconfig={JSON.stringify(headerConfig_for_version)}
        tabledata={JSON.stringify(currentTableData_version)}
      >
        <custom-button slot="Refresh" ref={button1Ref}>
          Refresh
        </custom-button>
        <custom-pagination
          slot="pagination"
          ref={pagination2Ref}
          // style={{ "--font-size": "1vw" }}
          total-pages={count_for_version}
        ></custom-pagination>
      </custom-table2>*/}
      <version-history
        versionhistory={JSON.stringify(versions)}
        ref={VersionHistoryRef}
      ></version-history>
      <bar-graph
        datalist={JSON.stringify(datalist)}
        stackbar={JSON.stringify(stackbar)}
        category={JSON.stringify(category)}
        booktype={JSON.stringify(booktype)}
        stack={JSON.stringify(stack)}
        xaxistitle={xaxistitle}
        yaxistitle={yaxistitle}
      ></bar-graph>
      <popup-2 options={JSON.stringify(item_for_popup2)}></popup-2>
      {/*<custom-calender></custom-calender> */}
      {/* <div style={{ marginTop: "20px" }}>
        <strong>Selected Options:</strong> {selected.join(", ")}
      </div>*/}
    </>
  );
}

export default App;
