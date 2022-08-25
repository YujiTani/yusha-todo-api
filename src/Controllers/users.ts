import { connectDB } from '@/DB/connect'

export const getAll = async (request, response) => {
  connectDB.query(
    `SELECT * FROM public."user" ORDER BY id ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

export const getById = (request, response) => {
  const id = parseInt(request.params.id);

  connectDB.query(
    `SELECT * FROM public."user" WHERE id = ${id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows[0]);
    }
  );
};

export const create = (request, response) => {
  const { lastName, firstName, email, password } = request.body;

  connectDB.query(
    `INSERT INTO public."user" ("lastName", "firstName", "email", "password") VALUES ($1, $2, $3, $4)`,
    [lastName, firstName, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`新規ユーザーを登録しました`);
    }
  );
};

export const updateById = (request, response) => {
  const id = parseInt(request.params.id);
  const { lastName, firstName } = request.body;

  connectDB.query(
    `UPDATE public."user" SET "lastName" = $1, "firstName" = $2 WHERE id = ${id}`,
    [lastName, firstName],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`ユーザーID${id}の情報を更新しました`);
    }
  );
};

export const deleteById = (request, response) => {
  const id = parseInt(request.params.id)

  connectDB.query(`DELETE FROM public."user" WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`ユーザーID${id}を削除しました`)
  })
}