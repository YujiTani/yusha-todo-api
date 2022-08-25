type Tasks = {
id: number,
name: string,
description: string,
create_at: string,
due_date: string,
end_at: string,
} []

export const tasks: Tasks = [
  {
    id: 1,
    name: "[テスト]皿洗い",
    description: "お皿を洗う",
    create_at: "2022-01-23 04:05:06",
    due_date: "2022-03-23",
    end_at: "",
  },
  {
    id: 2,
    name: "[テスト]お風呂掃除",
    description: "綺麗に風呂掃除をする",
    create_at: "2022-08-12 09:05:06",
    due_date: "2022-08-12",
    end_at: "",
  }
]