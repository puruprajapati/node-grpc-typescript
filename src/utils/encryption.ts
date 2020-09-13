import * as bcrypt from 'bcryptjs';

const hash = (password: string, SALT_ROUND: number) => {
  return bcrypt.hashSync(password, SALT_ROUND);
};

const compare = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export {
  hash,
  compare
}
