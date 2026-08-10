import React, { useMemo } from "react";
import { IconSetting1, IconUser, IconRuble2 } from "@dmitrygrigorov/icons";
import {
  TColumn,
  TCellParamsStatus,
  TCellParamsTags,
  TCellParamsRating,
  TCellParamsProgress,
  TCellParamsTableAvatar
} from "../../../types";
import ImageExample from "../../../assets/ImgCell_example.png";
import Table from "../../../Table";
import AvatarImage from "../../../../assets/avatar.svg";

export const TableCells: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com"
    },
    {
      id: "2",
      fullName: "Damien de la Tour",
      email: "dmdtr@mail.com"
    },
    {
      id: "3",
      fullName: "Auguste de Montferrand",
      email: "ogmonfer@fmail.com"
    }
  ];

  return <Table title="Basic cells" columns={columns} rowData={row} />;
};

export const TableCellsStatus: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "statusText",
        title: "status",
        description: "P1-s",
        columnTypes: "status",
        cellParamsGetter: ({ data }): TCellParamsStatus => ({
          status: data.status,
          leadIcon: <IconSetting1 />,
          isFilled: true
        }),
        iconDescription: <IconSetting1 />
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com",
      statusText: "Error",
      status: "error"
    },
    {
      id: "2",
      fullName: "Damien de la Tour",
      email: "dmdtr@mail.com",
      statusText: "Warning",
      status: "warning"
    },
    {
      id: "3",
      fullName: "Auguste de Montferrand",
      email: "ogmonfer@fmail.com",
      statusText: "Success",
      status: "success"
    }
  ];

  return <Table title="Status cells" columns={columns} rowData={row} />;
};

export const TableCellsTags: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "tags",
        title: "Tags",
        columnTypes: "tags",
        cellParamsGetter: ({ data }): TCellParamsTags => ({
          leadIcon: data.leadIcon
        })
      },
      {
        field: "username",
        title: "valueGetter example",
        columnTypes: "tags",
        valueGetter: ({ data }) =>
          data.username.map(
            (username: { usernames: string[] }) => username.usernames
          )
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      username: [
        {
          usernames: "first"
        }
      ],
      tags: ["first", "second", "third"],
      leadIcon: <IconSetting1 />,
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com"
    },
    {
      id: "2",
      username: [
        {
          usernames: "first"
        }
      ],
      tags: ["first", "second", "third"],
      fullName: "Damien de la Tour",
      email: "damiendelatur@fmail.com"
    }
  ];

  return <Table title="Tag cells" columns={columns} rowData={row} />;
};

export const TableCellsRating: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "rating",
        title: "rating",
        columnTypes: "rating",
        cellParamsGetter: ({ data }): TCellParamsRating => ({
          viewType: data.ratingViewType,
          sizeRating: data.ratingSize
        })
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com"
    },
    {
      id: "2",
      fullName: "Damien de la Tour",
      email: "dmdtr@mail.com",
      ratingViewType: "red",
      ratingSize: "l"
    },
    {
      id: "3",
      fullName: "Auguste de Montferrand",
      email: "ogmonfer@fmail.com",
      ratingViewType: "teal",
      ratingSize: "m"
    },
    {
      id: "4",
      fullName: "Louis Antoine de Saint-Just",
      email: "just@fmail.com",
      ratingViewType: "amber",
      ratingSize: "m"
    }
  ];

  return <Table title="Rating cells" columns={columns} rowData={row} />;
};

export const TableCellsNumber: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "number",
        title: "number",
        columnTypes: "number",
        cellIcon: <IconRuble2 />
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com",
      number: 4.67
    },
    {
      id: "2",
      fullName: "Auguste de Montferrand",
      email: "ogmonfer@fmail.com",
      number: Math.PI.toFixed(3)
    },
    {
      id: "3",
      fullName: "Louis Antoine de Saint-Just",
      email: "just@fmail.com",
      number: 450000000
    }
  ];

  return <Table title="Number cells" columns={columns} rowData={row} />;
};

export const TableCellsNumberFormatted: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "textNumber",
        title: "Formatted number",
        columnTypes: "number",
        valueFormatter: ({ value }) => value + " km"
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com",
      textNumber: 4.687
    },
    {
      id: "2",
      fullName: "Auguste de Montferrand",
      email: "ogmonfer@fmail.com",
      textNumber: Math.PI.toFixed(3)
    },
    {
      id: "3",
      fullName: "Louis Antoine de Saint-Just",
      email: "just@fmail.com",
      textNumber: 400000000
    }
  ];

  return (
    <Table
      title="Number cells with valueFormatter"
      columns={columns}
      rowData={row}
    />
  );
};

export const TableCellsProgress: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "progress",
        title: "progress",
        columnTypes: "progress",
        cellParamsGetter: ({ data }): TCellParamsProgress => ({
          variant: data.variantProgress,
          isText: data.textProgress,
          label: data.labelProgress
        })
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com",
      progress: 56,
      variantProgress: "info",
      textProgress: true
    },
    {
      id: "2",
      fullName: "Damien de la Tour",
      email: "dmdtr@mail.com",
      variantProgress: "error",
      labelProgress: "Error text",
      progress: 100
    },
    {
      id: "3",
      fullName: "Auguste de Montferrand",
      email: "ogmonfer@fmail.com",
      variantProgress: "success",
      progress: 56
    },
    {
      id: "4",
      fullName: "Louis Antoine de Saint-Just",
      email: "just@fmail.com",
      progress: 56,
      variantProgress: "warning"
    }
  ];

  return <Table title="Progress cells" columns={columns} rowData={row} />;
};

export const TableCellsAvatar: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "users",
        title: "Full name",
        columnTypes: "avatar",
        cellParamsGetter: ({ data }): TCellParamsTableAvatar => ({
          title: data.fullName,
          description: data.email,
          status: data.avatarStatus,
          icon: data.avatarIcon,
          image: data.avatarImage
        })
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Damien de la Tour",
      email: "dmdtr@mail.com",
      avatarStatus: "online",
      avatarImage: AvatarImage
    },
    {
      id: "2",
      avatarIcon: <IconUser />,
      fullName: "Louis Antoine de Saint-Just",
      avatarStatus: "busy"
    }
  ];
  return <Table title="Avatar cells" columns={columns} rowData={row} />;
};

export const TableCellsMultiAvatar: React.FC = () => {
  const columns: TColumn<any, any>[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "users",
        title: "Full name",
        columnTypes: "avatar",
        cellParamsGetter: ({ value }): TCellParamsTableAvatar => ({
          status: value.avatarStatus,
          icon: value.avatarIcon,
          image: value.avatarImage
        })
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      users: [
        {
          id: 1,
          avatarStatus: "online",
          avatarImage: AvatarImage
        },
        {
          id: 2,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 3,
          avatarStatus: "busy",
          avatarImage: AvatarImage
        },
        {
          id: 4,
          avatarStatus: "disabled",
          avatarImage: AvatarImage
        },
        {
          id: 5,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 6,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 7,
          avatarStatus: "online",
          avatarImage: AvatarImage
        },
        {
          id: 8,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 9,
          avatarStatus: "busy",
          avatarImage: AvatarImage
        },
        {
          id: 10,
          avatarStatus: "disabled",
          avatarImage: AvatarImage
        },
        {
          id: 11,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 12,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 13,
          avatarStatus: "online",
          avatarImage: AvatarImage
        },
        {
          id: 14,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 15,
          avatarStatus: "busy",
          avatarImage: AvatarImage
        },
        {
          id: 16,
          avatarStatus: "disabled",
          avatarImage: AvatarImage
        },
        {
          id: 17,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        },
        {
          id: 18,
          avatarStatus: "offline",
          avatarImage: AvatarImage
        }
      ]
    }
  ];

  return <Table title="Multi-avatar cells" columns={columns} rowData={row} />;
};

export const TableCellsImage: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "image",
        title: "image",
        columnTypes: "image"
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com",
      image: ImageExample
    }
  ];

  return <Table title="Image cells" columns={columns} rowData={row} />;
};

export const TableCellsBoolean: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "fullName",
        title: "Full name",
        cellIcon: <IconSetting1 />
      },
      {
        field: "email",
        title: "email",
        cellTrailContent: <IconSetting1 />
      },
      {
        field: "boolean",
        title: "boolean",
        columnTypes: "boolean"
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Palmerin de Lonfal",
      email: "palmslonfale@mail.com",
      boolean: true
    },
    {
      id: "2",
      fullName: "Damien de la Tour",
      email: "dmdtr@mail.com",
      boolean: false
    }
  ];

  return <Table title="Boolean cells" columns={columns} rowData={row} />;
};
