export default {
  TEST_PORT: parseInt(process.env.TEST_PORT || process.env.PORT || '8081'),
} as const;
