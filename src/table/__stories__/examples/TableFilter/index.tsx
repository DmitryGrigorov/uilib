import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useState
} from "react";
import { InputDate } from "@dmitrygrigorov/components";
import { format, parse, isAfter, isBefore } from "date-fns";
import { ITableProps, TColumn } from "../../../types";
import Table from "../../../Table";

export const TableFilter: React.FC<Partial<ITableProps>> = (props) => {
  const JOBS = ["teamlead", "senior", "middle"];
  const CHAPTERS = ["design", "frontend"];
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id"
      },
      {
        field: "name"
      },
      {
        field: "jobTitle",
        isFilter: true,
        filterMenuItems: [
          {
            title: "Roles",
            options: [
              {
                title: "Team leads",
                name: "teamlead"
              },
              {
                title: "Senior engineers",
                name: "senior"
              },
              {
                title: "Mid-level engineers",
                name: "middle"
              }
            ]
          },
          {
            title: "Chapters",
            options: [
              {
                title: "Design",
                name: "design"
              },
              {
                title: "Frontend",
                name: "frontend"
              }
            ]
          }
        ],
        filterFunc: (params) =>
          params.value.split(" ").some((v) => params.filterParams.includes(v))
      },
      {
        field: "email"
      }
    ],
    []
  );

  const [users, setUsers] = useState<any[]>([]);

  const loadData = async (): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await response.json()) as any[];
    setUsers(
      data.map((v) => ({
        ...v,
        jobTitle: `${JOBS[Math.floor(Math.random() * JOBS.length)]} ${
          CHAPTERS[Math.floor(Math.random() * CHAPTERS.length)]
        }`
      }))
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table
      {...props}
      columns={columns}
      rowData={users}
      size="s"
      defaultColumn={{ isSortable: true }}
    />
  );
};

const CustomFilter: React.FC<{
  onChange: (fromDate: string, toDate: string) => void;
}> = ({ onChange }) => {
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    const dates = value.split(" / ");
    if (
      dates[0] &&
      !dates[0].includes("_") &&
      dates[1] &&
      !dates[1].includes("_")
    ) {
      onChange(dates[0], dates[1]);
    } else {
      onChange("", "");
    }
  };
  return (
    <InputDate
      onChange={handleChange}
      isRangeMode
      isCalendar={false}
      isShowClearIcon
    />
  );
};

export const TableCustomFilter: React.FC<Partial<ITableProps>> = (props) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id"
      },
      {
        field: "name"
      },
      {
        field: "birth_date",
        isFilter: true,
        filterMenuItems: (
          <CustomFilter
            onChange={(_fromDate, _toDate) => {
              setToDate(_toDate);
              setFromDate(_fromDate);
            }}
          />
        )
      },
      {
        field: "email"
      }
    ],
    []
  );

  const [users, setUsers] = useState<any[]>([]);

  const loadData = async (): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await response.json()) as any[];
    setUsers(
      data.map((v) => ({
        ...v,
        birth_date: format(
          new Date(
            new Date().getFullYear() -
              1 +
              Math.random() *
                (new Date().getTime() - new Date().getFullYear() - 1)
          ),
          "dd.MM.yyyy"
        )
      }))
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredUsers = useMemo(() => {
    if (fromDate && toDate) {
      const from = parse(fromDate, "dd.MM.yyyy", new Date());
      const to = parse(toDate, "dd.MM.yyyy", new Date());
      return users.filter((item) => {
        const itemDate = parse(item.birth_date, "dd.MM.yyyy", new Date());
        return isAfter(itemDate, from) && isBefore(itemDate, to);
      });
    }
    return users;
  }, [users, fromDate, toDate]);

  return (
    <Table
      {...props}
      columns={columns}
      rowData={filteredUsers}
      rowModel="server"
      size="s"
      defaultColumn={{ isSortable: true }}
    />
  );
};
