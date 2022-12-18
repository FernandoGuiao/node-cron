import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  //php artisan:
    await exec('php artisan schedule:run');
});
