import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [QueryService],
  exports: [QueryService],
})
export class QueryModule {}
