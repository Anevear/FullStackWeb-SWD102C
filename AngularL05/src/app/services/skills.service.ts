import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills:Skill[] = [
    {
      id:0,
      name: 'Algebra',
      level: Level.Advanced
    },
    {
      id:1,
      name:'PC Builds',
      level: Level.Advanced
    },
    {
      id:2,
      name: 'Developing Software',
      level: Level.Beginner
    }
  ]

  constructor() { }
}
