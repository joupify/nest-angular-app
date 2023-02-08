import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contact } from './contact/entities/contact.entity';
import { ContactService } from './contact/service/contact.service';
import { ContactsController } from './contact/controllers/contacts.controller';


@Module({
  imports: [

    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "nestngdb",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Contact]),
   ],

 
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService],

  
     
})
export class AppModule {}
