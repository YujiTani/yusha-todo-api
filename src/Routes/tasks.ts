import express from 'express';
export const router = express.Router();

import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from '../Controllers/tasks';

// タスク一覧取得
router.get("/", getAll);

// タスク取得
router.get("/:id", getById);

// 新規タスク作成
router.post("/", create);

// タスク更新
router.put("/:id", updateById);

// タスク削除
router.delete("/:id", deleteById);
