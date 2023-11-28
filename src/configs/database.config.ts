import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const domain = process.env.MONGO_DOMAIN;
  const encodePassword = encodeURIComponent(password);
  const uri = `mongodb+srv://${username}:${encodePassword}@${domain}/?retryWrites=true&w=majority`;
  return { username, password, domain, uri };
});
