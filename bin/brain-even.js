#!/usr/bin/env node
import { questions, rightAnswers, rules } from '../src/games/even.js';
import game from '../src/index.js';

game(questions, rightAnswers, rules);
