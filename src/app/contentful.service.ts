import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  constructor(
    ) { }
  private client= createClient({
    space: environment.contentful.spaceId ,
    accessToken: environment.contentful.token
  });

  getCourses(query?: Object) : Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type: 'title'
    }, query))
    .then(res => res.items);
  }
  getCourse(courseId) : Promise <Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'title'
    }, {"sys.id": courseId}))
    .then(res => res.items[0])
  }
}
