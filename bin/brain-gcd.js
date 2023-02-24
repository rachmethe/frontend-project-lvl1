#!/usr/bin/env node
import { questions, rightAnswers, rules } from '../src/games/gcd.js';
import game from '../src/index.js';

game(questions, rightAnswers, rules);
