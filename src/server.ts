import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('✅ Database connected successfully');
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}🏃🏽‍♂️‍➡️`);
    });
  } catch (error) {
    console.error('❌ Error starting the server:', error);
  }
}

main().catch((err) => console.error('❌ Unexpected error:', err));
