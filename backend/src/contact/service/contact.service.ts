import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from  'typeorm';
import { Contact } from 'src/contact/entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ) { }

    async create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }
    
    async  readAll(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    async update(contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id,contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }

}
