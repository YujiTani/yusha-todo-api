import express from 'express';
export const router = express.Router();

import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from '@/Controllers/users';

// ユーザー一覧取得
router.get('/', getAll);

// IDの一致するユーザー取得
router.get('/:id', getById);

// ユーザー登録
router.post('/', create);

// ユーザー情報更新
router.put('/:id', updateById);

// ユーザー削除
router.delete('/:id', deleteById);
