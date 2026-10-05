export const meta = {
  name: 'studio-round',
  description: 'Play a Sprout world through rounds of blind playtests, synthesis, async steering and revision',
  whenToUse:
    'A world in worlds/<name>/ has a brief: `studio new` (args {world, new: true}) writes its intent and world v1 then plays round 1; `studio run` (args {world, rounds}) plays on from where it stands.',
  phases: [
    { title: 'Author', detail: 'intent.md and world v1, for a new world' },
    { title: 'Brief-check', detail: 'the world against every constraint of its brief' },
    { title: 'Playtest', detail: 'blind runs over personas and seeds, each reported' },
    { title: 'Measure', detail: 'sprout play --report on every run, and merged' },
    { title: 'Synthesize', detail: 'the critique, against the sealed intent' },
    { title: 'Steer', detail: 'the synthesis to the steering doc; its comments to steering.md' },
    { title: 'Revise', detail: 'the author answers every point, then edits' },
    { title: 'Commit', detail: 'the round, as one commit' },
  ],
}

// One round of docs/loop.md, repeated. This file is generated from
// scripts/studio-round.template.js by `npm run schemas`, which writes the
// schemas in: edit the template, never this file. A workflow touches no
// file itself, so everything on disk is the clerk's, through
// scripts/round.mjs, and every agent's output is validated there and
// re-asked once. Resumable: each round starts from what `status` says is
// already on disk, and a stop always says why.

const SCHEMAS = {
  "playtest-report": {
    "title": "playtest-report",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "persona": {
        "type": "string",
        "enum": [
          "explorer",
          "goal-seeker",
          "casual",
          "prose-reader",
          "parser-breaker",
          "newcomer"
        ]
      },
      "seed": {
        "type": "integer",
        "minimum": 0,
        "maximum": 9007199254740991
      },
      "turns": {
        "type": "integer",
        "minimum": 0,
        "maximum": 9007199254740991,
        "description": "How many lines the player typed."
      },
      "done": {
        "type": "object",
        "properties": {
          "reason": {
            "type": "string",
            "enum": [
              "ending",
              "stuck",
              "bored",
              "exhausted",
              "turn-cap"
            ]
          },
          "why": {
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "reason",
          "why"
        ],
        "additionalProperties": false,
        "description": "Why the player stopped, in their words."
      },
      "about": {
        "type": "string",
        "minLength": 1,
        "description": "What this world is about, in the player’s own words."
      },
      "ending": {
        "type": "object",
        "properties": {
          "reached": {
            "type": "string",
            "enum": [
              "yes",
              "no",
              "unsure"
            ]
          },
          "what": {
            "anyOf": [
              {
                "type": "string",
                "minLength": 1
              },
              {
                "type": "null"
              }
            ],
            "description": "The ending, where one was reached or may have been."
          }
        },
        "required": [
          "reached",
          "what"
        ],
        "additionalProperties": false
      },
      "moments": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "turn": {
              "type": "integer",
              "minimum": 1,
              "maximum": 9007199254740991,
              "description": "A transcript turn: the number of the line the player typed, from 1."
            },
            "kind": {
              "type": "string",
              "enum": [
                "delight",
                "frustration",
                "confusion",
                "surprise"
              ]
            },
            "note": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "turn",
            "kind",
            "note"
          ],
          "additionalProperties": false
        },
        "description": "Noted as they happened, not only at the end."
      },
      "wished": {
        "type": "array",
        "items": {
          "type": "string",
          "minLength": 1
        },
        "description": "What the player wished they could do, and could not."
      },
      "lines": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "turn": {
              "type": "integer",
              "minimum": 1,
              "maximum": 9007199254740991,
              "description": "A transcript turn: the number of the line the player typed, from 1."
            },
            "line": {
              "type": "string",
              "minLength": 1
            },
            "why": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "turn",
            "line",
            "why"
          ],
          "additionalProperties": false
        },
        "description": "Lines the world wrote that mattered to the player, as they read them."
      },
      "ratings": {
        "type": "object",
        "properties": {
          "fun": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "engagement": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "difficulty": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              },
              "felt": {
                "type": "string",
                "enum": [
                  "too easy",
                  "right",
                  "too hard"
                ]
              }
            },
            "required": [
              "score",
              "why",
              "turns",
              "felt"
            ],
            "additionalProperties": false
          },
          "interestingness": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "prose": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "fun",
          "engagement",
          "difficulty",
          "interestingness",
          "prose"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "persona",
      "seed",
      "turns",
      "done",
      "about",
      "ending",
      "moments",
      "wished",
      "lines",
      "ratings"
    ],
    "additionalProperties": false
  },
  "pairwise-verdict": {
    "title": "pairwise-verdict",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "axes": {
        "type": "object",
        "properties": {
          "fun": {
            "type": "object",
            "properties": {
              "better": {
                "type": "string",
                "enum": [
                  "first",
                  "second",
                  "same"
                ]
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "type": "object",
                "properties": {
                  "first": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  },
                  "second": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  }
                },
                "required": [
                  "first",
                  "second"
                ],
                "additionalProperties": false,
                "description": "The turns, in each, the verdict rests on."
              }
            },
            "required": [
              "better",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "engagement": {
            "type": "object",
            "properties": {
              "better": {
                "type": "string",
                "enum": [
                  "first",
                  "second",
                  "same"
                ]
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "type": "object",
                "properties": {
                  "first": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  },
                  "second": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  }
                },
                "required": [
                  "first",
                  "second"
                ],
                "additionalProperties": false,
                "description": "The turns, in each, the verdict rests on."
              }
            },
            "required": [
              "better",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "difficulty": {
            "type": "object",
            "properties": {
              "better": {
                "type": "string",
                "enum": [
                  "first",
                  "second",
                  "same"
                ]
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "type": "object",
                "properties": {
                  "first": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  },
                  "second": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  }
                },
                "required": [
                  "first",
                  "second"
                ],
                "additionalProperties": false,
                "description": "The turns, in each, the verdict rests on."
              }
            },
            "required": [
              "better",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "interestingness": {
            "type": "object",
            "properties": {
              "better": {
                "type": "string",
                "enum": [
                  "first",
                  "second",
                  "same"
                ]
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "type": "object",
                "properties": {
                  "first": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  },
                  "second": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  }
                },
                "required": [
                  "first",
                  "second"
                ],
                "additionalProperties": false,
                "description": "The turns, in each, the verdict rests on."
              }
            },
            "required": [
              "better",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "prose": {
            "type": "object",
            "properties": {
              "better": {
                "type": "string",
                "enum": [
                  "first",
                  "second",
                  "same"
                ]
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "type": "object",
                "properties": {
                  "first": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  },
                  "second": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9007199254740991,
                      "description": "A transcript turn: the number of the line the player typed, from 1."
                    }
                  }
                },
                "required": [
                  "first",
                  "second"
                ],
                "additionalProperties": false,
                "description": "The turns, in each, the verdict rests on."
              }
            },
            "required": [
              "better",
              "why",
              "turns"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "fun",
          "engagement",
          "difficulty",
          "interestingness",
          "prose"
        ],
        "additionalProperties": false
      },
      "overall": {
        "type": "object",
        "properties": {
          "better": {
            "type": "string",
            "enum": [
              "first",
              "second",
              "same"
            ]
          },
          "why": {
            "type": "string",
            "minLength": 1
          },
          "turns": {
            "type": "object",
            "properties": {
              "first": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                }
              },
              "second": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                }
              }
            },
            "required": [
              "first",
              "second"
            ],
            "additionalProperties": false,
            "description": "The turns, in each, the verdict rests on."
          }
        },
        "required": [
          "better",
          "why",
          "turns"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "axes",
      "overall"
    ],
    "additionalProperties": false
  },
  "synthesis": {
    "title": "synthesis",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "points": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "pattern": "^P\\d+$"
            },
            "category": {
              "type": "string",
              "enum": [
                "design",
                "world-bug",
                "engine-bug",
                "language-gap"
              ]
            },
            "severity": {
              "type": "string",
              "enum": [
                "low",
                "medium",
                "high"
              ]
            },
            "consensus": {
              "type": "object",
              "properties": {
                "n": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991
                },
                "of": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991
                }
              },
              "required": [
                "n",
                "of"
              ],
              "additionalProperties": false,
              "description": "How many of the round’s runs support it."
            },
            "claim": {
              "type": "string",
              "minLength": 1
            },
            "evidence": {
              "minItems": 1,
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "run": {
                    "type": "string",
                    "minLength": 1,
                    "description": "The run id: its persona and seed, as `explorer-7`."
                  },
                  "turn": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 9007199254740991,
                    "description": "A transcript turn: the number of the line the player typed, from 1."
                  },
                  "quote": {
                    "description": "What the transcript says there, where it helps.",
                    "type": "string",
                    "minLength": 1
                  }
                },
                "required": [
                  "run",
                  "turn"
                ],
                "additionalProperties": false
              }
            },
            "recommendation": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "id",
            "category",
            "severity",
            "consensus",
            "claim",
            "evidence",
            "recommendation"
          ],
          "additionalProperties": false
        }
      },
      "legibility": {
        "type": "object",
        "properties": {
          "verdict": {
            "type": "string",
            "enum": [
              "legible",
              "partly",
              "illegible"
            ]
          },
          "why": {
            "type": "string",
            "minLength": 1
          },
          "runs": {
            "minItems": 1,
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "run": {
                  "type": "string",
                  "minLength": 1
                },
                "understood": {
                  "type": "string",
                  "minLength": 1,
                  "description": "What the player thought the world was about."
                },
                "matches": {
                  "type": "string",
                  "enum": [
                    "yes",
                    "partly",
                    "no"
                  ]
                }
              },
              "required": [
                "run",
                "understood",
                "matches"
              ],
              "additionalProperties": false
            }
          }
        },
        "required": [
          "verdict",
          "why",
          "runs"
        ],
        "additionalProperties": false,
        "description": "What players took the world to be about, against the sealed intent."
      },
      "metrics": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "metric": {
              "type": "string",
              "minLength": 1,
              "description": "A figure from `sprout test --report`, as `reach.passages.never`."
            },
            "before": {
              "description": "Last round’s; null in round 1.",
              "type": [
                "number",
                "null"
              ]
            },
            "after": {
              "type": "number"
            }
          },
          "required": [
            "metric",
            "before",
            "after"
          ],
          "additionalProperties": false
        },
        "description": "The round’s metric deltas."
      }
    },
    "required": [
      "points",
      "legibility",
      "metrics"
    ],
    "additionalProperties": false
  },
  "revision-plan": {
    "title": "revision-plan",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "decisions": {
        "minItems": 1,
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "answers": {
              "type": "string",
              "pattern": "^(P|S)\\d+$"
            },
            "decision": {
              "type": "string",
              "enum": [
                "accept",
                "reject"
              ]
            },
            "reason": {
              "type": "string",
              "minLength": 1,
              "description": "Why, for a rejection above all: the brief and the artistic direction outrank the median playtester."
            }
          },
          "required": [
            "answers",
            "decision",
            "reason"
          ],
          "additionalProperties": false
        }
      },
      "changes": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "what": {
              "type": "string",
              "minLength": 1
            },
            "files": {
              "minItems": 1,
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              },
              "description": "The world files it touches."
            },
            "for": {
              "minItems": 1,
              "type": "array",
              "items": {
                "type": "string",
                "pattern": "^(P|S)\\d+$"
              },
              "description": "The accepted points it answers."
            }
          },
          "required": [
            "what",
            "files",
            "for"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "decisions",
      "changes"
    ],
    "additionalProperties": false
  },
  "brief-check": {
    "title": "brief-check",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "ok": {
        "type": "boolean"
      },
      "violations": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "constraint": {
              "type": "string",
              "minLength": 1,
              "description": "The constraint, as the brief words it."
            },
            "where": {
              "type": "string",
              "minLength": 1,
              "description": "Where in the world it fails."
            },
            "why": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "constraint",
            "where",
            "why"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "ok",
      "violations"
    ],
    "additionalProperties": false
  },
  "steering": {
    "title": "steering",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "reached": {
        "type": "boolean",
        "description": "Whether the doc could be reached at all."
      },
      "doc": {
        "anyOf": [
          {
            "type": "string",
            "minLength": 1
          },
          {
            "type": "null"
          }
        ],
        "description": "The doc’s url; null where it could not be reached."
      },
      "comments": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "The comment’s own id in the doc, which tells a new comment from one already read."
            },
            "words": {
              "type": "string",
              "minLength": 1,
              "description": "The comment, exactly as the director wrote it."
            },
            "tab": {
              "type": "string",
              "minLength": 1,
              "description": "The tab it was left on."
            },
            "on": {
              "type": "string",
              "description": "What it was left on: the words it is anchored to, or empty for the tab as a whole."
            }
          },
          "required": [
            "id",
            "words",
            "tab",
            "on"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "reached",
      "doc",
      "comments"
    ],
    "additionalProperties": false
  },
  "playtest-report-as-played": {
    "title": "playtest-report-as-played",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "turns": {
        "type": "integer",
        "minimum": 0,
        "maximum": 9007199254740991,
        "description": "How many lines the player typed."
      },
      "done": {
        "type": "object",
        "properties": {
          "reason": {
            "type": "string",
            "enum": [
              "ending",
              "stuck",
              "bored",
              "exhausted",
              "turn-cap"
            ]
          },
          "why": {
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "reason",
          "why"
        ],
        "additionalProperties": false,
        "description": "Why the player stopped, in their words."
      },
      "about": {
        "type": "string",
        "minLength": 1,
        "description": "What this world is about, in the player’s own words."
      },
      "ending": {
        "type": "object",
        "properties": {
          "reached": {
            "type": "string",
            "enum": [
              "yes",
              "no",
              "unsure"
            ]
          },
          "what": {
            "anyOf": [
              {
                "type": "string",
                "minLength": 1
              },
              {
                "type": "null"
              }
            ],
            "description": "The ending, where one was reached or may have been."
          }
        },
        "required": [
          "reached",
          "what"
        ],
        "additionalProperties": false
      },
      "moments": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "turn": {
              "type": "integer",
              "minimum": 1,
              "maximum": 9007199254740991,
              "description": "A transcript turn: the number of the line the player typed, from 1."
            },
            "kind": {
              "type": "string",
              "enum": [
                "delight",
                "frustration",
                "confusion",
                "surprise"
              ]
            },
            "note": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "turn",
            "kind",
            "note"
          ],
          "additionalProperties": false
        },
        "description": "Noted as they happened, not only at the end."
      },
      "wished": {
        "type": "array",
        "items": {
          "type": "string",
          "minLength": 1
        },
        "description": "What the player wished they could do, and could not."
      },
      "lines": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "turn": {
              "type": "integer",
              "minimum": 1,
              "maximum": 9007199254740991,
              "description": "A transcript turn: the number of the line the player typed, from 1."
            },
            "line": {
              "type": "string",
              "minLength": 1
            },
            "why": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "turn",
            "line",
            "why"
          ],
          "additionalProperties": false
        },
        "description": "Lines the world wrote that mattered to the player, as they read them."
      },
      "ratings": {
        "type": "object",
        "properties": {
          "fun": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "engagement": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "difficulty": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              },
              "felt": {
                "type": "string",
                "enum": [
                  "too easy",
                  "right",
                  "too hard"
                ]
              }
            },
            "required": [
              "score",
              "why",
              "turns",
              "felt"
            ],
            "additionalProperties": false
          },
          "interestingness": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          },
          "prose": {
            "type": "object",
            "properties": {
              "score": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "why": {
                "type": "string",
                "minLength": 1
              },
              "turns": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991,
                  "description": "A transcript turn: the number of the line the player typed, from 1."
                },
                "description": "The transcript turns this rests on; at least one."
              }
            },
            "required": [
              "score",
              "why",
              "turns"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "fun",
          "engagement",
          "difficulty",
          "interestingness",
          "prose"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "turns",
      "done",
      "about",
      "ending",
      "moments",
      "wished",
      "lines",
      "ratings"
    ],
    "additionalProperties": false
  }
}

const A = args ?? {}
const WORLD = A.world
if (typeof WORLD !== 'string' || !/^[a-z0-9_-]+$/.test(WORLD)) {
  throw new Error('args.world names a folder under worlds/, as { world: "printers_shop" }')
}
const ROUNDS = Math.min(A.rounds ?? 1, A.maxRounds ?? 12)
const PERSONAS = A.personas ?? ['explorer', 'goal-seeker', 'casual', 'prose-reader', 'parser-breaker', 'newcomer']
const SEEDS = A.seeds ?? [1]
const MAX_RUNS = A.maxRuns ?? 12
const TURN_CAP = A.turnCap ?? 150
const ADVANCE = A.advancePerTurn ?? 30
const AUTHOR_MODEL = A.author ?? 'opus'
const PER_ROUND = A.perRoundBudget ?? 400000
const W = `worlds/${WORLD}`

const PERSONA = {
  explorer:
    'An explorer and completionist: you want to see every place and try every thing, and you are not done while anything is left unexamined.',
  'goal-seeker':
    'A goal-seeker: you look for what this place wants of you and pursue it. Wandering bores you once you have a purpose.',
  casual:
    'An impatient, casual player: you give it a few minutes. If nothing grabs you soon, you quit, and you say why.',
  'prose-reader':
    'A reader first: you linger, examine, reread, and care most about how it is written. You rate the writing closely.',
  'parser-breaker':
    'Contrary by habit: you phrase things oddly, try the unexpected, combine things, and push on whatever the world says it will not do.',
  newcomer:
    'New to text adventures: you do not know the conventions. You type what you would say to a person, and you notice what confuses you.',
}
const CASUAL_CAP = Math.min(TURN_CAP, 30)

/** A clerk's run of one round.mjs command, and its JSON. */
async function clerk(command, stdin, label) {
  const given = stdin === undefined ? '' : `\nFeed it this on stdin, exactly:\n${JSON.stringify(stdin)}`
  const out = await agent(`Run: node scripts/round.mjs ${command}${given}`, {
    agentType: 'clerk',
    label: label ?? `clerk: ${command.split(' ')[0]}`,
    schema: {
      type: 'object',
      properties: { stdout: { type: 'string', description: 'What the command printed on stdout, exactly.' } },
      required: ['stdout'],
    },
  })
  if (out === null) throw new Error(`the clerk did not run: ${command}`)
  return JSON.parse(out.stdout.trim())
}

/**
 * `ask` an agent for a `kind`, keep it through the clerk, and re-ask once with
 * the problems and the refused answer where it is refused; null, logged,
 * where it is refused twice.
 */
async function kept(kind, name, round, ask) {
  const where = `${WORLD} ${round} ${kind}${name ? ` ${name}` : ''}`
  let value = await ask(null)
  if (value === null) return null
  let saved = await clerk(`save ${where}`, value, `keep ${kind}${name ? ` ${name}` : ''}`)
  if (saved.ok && saved.note) log(saved.note)
  if (saved.ok) return value
  // A run nobody played has nothing to mend: asking again could only invent the play.
  if (saved.unplayed) {
    log(`${kind}${name ? ` ${name}` : ''} dropped: ${saved.problems.join('; ')}`)
    return null
  }
  value = await ask(saved.problems, value)
  if (value === null) return null
  saved = await clerk(`save ${where}`, value, `keep ${kind}${name ? ` ${name}` : ''}, again`)
  if (saved.ok && saved.note) log(saved.note)
  if (saved.ok) return value
  log(`${kind}${name ? ` ${name}` : ''} was refused twice: ${saved.problems.join('; ')}`)
  return null
}

const again = (problems) =>
  problems === null ? '' : `\n\nYour last answer was refused. Fix exactly these, and change nothing else:\n- ${problems.join('\n- ')}`

let status = await clerk(`status ${WORLD}`, undefined, 'status')
if (!status.brief) throw new Error(`${W}/brief.md is missing: a world starts from its brief (templates/brief.md)`)

if (A.new === true || !status.playable) {
  phase('Author')
  const wrote = await agent(
    `Write the world for ${W}/brief.md. First write ${W}/intent.md, then the world in ${W}/world/ ` +
      `(start it with \`npx sprout scaffold world ${W}/world --author studio\` if it does not exist), ` +
      `with at least one test in ${W}/world/tests/. Log friction in ${W}/friction.md. ` +
      `\`npx sprout check ${W}/world\` and \`npx sprout test ${W}/world\` must pass. Answer with a short account of what you wrote.`,
    { agentType: 'author', model: AUTHOR_MODEL, label: 'author: world v1', phase: 'Author' },
  )
  if (wrote === null) throw new Error('the author did not write the world')
  const verified = await clerk(`verify ${WORLD}`)
  if (!verified.ok) throw new Error(`world v1 does not pass: ${verified.problems.join(' | ')}`)
  status = await clerk(`status ${WORLD}`, undefined, 'status')
}

const flat = (a, b) => a !== null && b !== null && JSON.stringify(a) === JSON.stringify(b)
let quiet = 0
let played = 0
const summary = []

while (played < ROUNDS) {
  if (budget.total && budget.remaining() < PER_ROUND) {
    log(`stopping: ${Math.round(budget.remaining() / 1000)}k of the budget left, and a round takes about ${PER_ROUND / 1000}k`)
    break
  }
  const last = status.rounds[status.rounds.length - 1]
  const resuming = last !== undefined && !last.committed
  const round = resuming ? last.round : String(status.rounds.length + 1).padStart(2, '0')
  const at = resuming ? last : { runs: [], reports: [], metrics: false, synthesis: false, steering: false, revision: false }
  const R = `${W}/rounds/${round}`
  const previous = status.rounds.filter((one) => one.committed).pop() ?? null
  log(`${WORLD}, round ${round}${resuming ? ', resumed from disk' : ''}`)

  // 1. Brief-check, where the world has been revised since it was checked.
  if (previous !== null && at.runs.length === 0) {
    phase('Brief-check')
    const check = (problems) =>
      agent(`Check ${W}/world against every constraint of ${W}/brief.md.${again(problems)}`, {
        agentType: 'brief-checker',
        phase: 'Brief-check',
        label: 'brief-check',
        schema: SCHEMAS['brief-check'],
      })
    let checked = await check(null)
    if (checked !== null && !checked.ok) {
      log(`brief-check: ${checked.violations.length} violation(s); back to the author`)
      await agent(
        `The world ${W}/world violates its brief. Fix these, changing nothing else, and keep \`npx sprout check\` and \`npx sprout test\` passing:\n` +
          checked.violations.map((one) => `- ${one.constraint}: ${one.where}: ${one.why}`).join('\n'),
        { agentType: 'author', model: AUTHOR_MODEL, phase: 'Brief-check', label: 'author: to the brief' },
      )
      checked = await check(null)
    }
    if (checked === null || !checked.ok) {
      log('stopping: the world still violates its brief after one revision; the round is not played')
      break
    }
  }

  // 2. Playtest: every run not yet reported, each through its own door.
  phase('Playtest')
  const runs = PERSONAS.flatMap((persona) => SEEDS.map((seed) => ({ persona, seed, id: `${persona}-${seed}` })))
  if (runs.length > MAX_RUNS) log(`playing ${MAX_RUNS} of ${runs.length} runs: the cap on runs per round`)
  const todo = runs.slice(0, MAX_RUNS).filter((run) => !at.reports.includes(run.id))
  const reports = await pipeline(
    todo,
    (run) => {
      const cap = run.persona === 'casual' ? CASUAL_CAP : TURN_CAP
      return clerk(`open ${WORLD} ${round} ${run.persona} ${run.seed} --turn-cap ${cap} --advance ${ADVANCE}`, undefined, `open ${run.id}`)
    },
    (opened, run) =>
      kept('playtest-report', run.id, round, async (problems, refused) => {
        // The player never learns its seed: the report is theirs, the run's persona and seed the workflow's.
        const played =
          problems === null
            ? await agent(
                `Your door: ${opened.door}\nGo by the name ${['Ash', 'Bryn', 'Cato', 'Dell', 'Esme', 'Finch'][PERSONAS.indexOf(run.persona) % 6]}.\n` +
                  `Who you are as a player: ${PERSONA[run.persona]}\n` +
                  `You are arriving in a place. Play.`,
                { agentType: 'playtester', phase: 'Playtest', label: `play ${run.id}`, schema: SCHEMAS['playtest-report-as-played'] },
              )
            : await agent(
                `This is a playtest report a player wrote, and it was refused. You cannot replay what they played.${again(problems)}\n\n` +
                  `The report:\n${JSON.stringify(refused)}`,
                { agentType: 'mender', phase: 'Playtest', label: `mend report ${run.id}`, schema: SCHEMAS['playtest-report-as-played'] },
              )
        if (played === null) return null
        const { persona: _p, seed: _s, ...theirs } = played
        return { persona: run.persona, seed: run.seed, ...theirs }
      }),
  )
  const reported = reports.filter(Boolean).length
  log(`${reported} of ${todo.length} runs reported`)
  // A synthesis of a few runs speaks for a round it did not see: the round stops, uncommitted, to be played again.
  const wanted = Math.min(runs.length, MAX_RUNS)
  if ((at.reports.length + reported) * 2 < wanted) {
    log(`stopping: ${at.reports.length + reported} of ${wanted} runs were reported, and a round needs at least half`)
    break
  }

  // 3. Measure.
  phase('Measure')
  const measured = await clerk(`measure ${WORLD} ${round}`, undefined, 'measure')
  if (measured.ok === false) {
    log(`stopping: the round's runs could not be measured: ${measured.problems.join(' | ')}`)
    break
  }

  // 4. Synthesize.
  // Resumed past a step, the step's file stands and it is not done twice.
  phase('Synthesize')
  const before = previous === null ? null : previous.figures
  const synthesis = at.synthesis
    ? { points: { length: at.points } }
    : await kept('synthesis', null, round, (problems) =>
    agent(
      `Synthesize round ${round} of ${W}. The reports are ${R}/reports/, the metrics ${R}/metrics/ ` +
        `(merged.json is the round's), the recorded runs ${R}/runs/, the sealed intent ${W}/intent.md and the brief ${W}/brief.md.\n` +
        `The round's figures: ${JSON.stringify(measured.figures)}\nLast round's: ${JSON.stringify(before)} ` +
        `(report each figure's delta, before null in the first round). The round had ${measured.runs.length} runs.${again(problems)}`,
      { agentType: 'synthesizer', phase: 'Synthesize', label: 'synthesize', schema: SCHEMAS.synthesis },
    ),
      )
  if (synthesis === null) {
    log('stopping: no valid synthesis')
    break
  }

  // 5. Steer, without waiting: what is there now steers this revision, and a late comment the next.
  phase('Steer')
  if (!at.steering) {
    const steering = await kept('steering', null, round, (problems, refused) =>
      problems === null
        ? agent(
            `Round ${round} of the world ${WORLD}: publish ${R}/synthesis.md as tab "Round ${round}" of the world's steering doc ` +
              `(its url, where there is one yet, is in ${W}/steering.json), and hand back every comment on the doc.`,
            { agentType: 'steward', phase: 'Steer', label: 'steer', schema: SCHEMAS.steering },
          )
        : // Asked again of the steward, which reads the doc, never mended: a mender could drop or reword the director's words.
          agent(
            `Round ${round} of the world ${WORLD}: the tab "Round ${round}" is already published; read the doc again and hand back every comment on it.${again(problems)}`,
            { agentType: 'steward', phase: 'Steer', label: 'steer, again', schema: SCHEMAS.steering },
          ),
    )
    if (steering === null) log('steering: nothing valid was read of the doc; the author revises without it')
    else if (!steering.reached) log('steering: the doc could not be reached; the author revises without it')
  }

  // 6. Revise.
  phase('Revise')
  const plan = at.revision
    ? null
    : await kept('revision-plan', null, round, (problems) =>
    agent(
      `Revise ${W}/world after round ${round}. Read ${R}/synthesis.json, ${R}/steering.md, ${R}/metrics/merged.json and your ${W}/intent.md. ` +
        `Answer every point (P…) and every steering comment (S…), accept or reject, with a reason; then make the accepted changes, ` +
        `keep ${W}/intent.md current, log friction in ${W}/friction.md, and leave \`npx sprout check\` and \`npx sprout test\` passing. ` +
        `Hand back the plan: your decisions, then the changes you made.${again(problems)}`,
      { agentType: 'author', model: AUTHOR_MODEL, phase: 'Revise', label: 'revise', schema: SCHEMAS['revision-plan'] },
    ),
      )
  const verified = await clerk(`verify ${WORLD}`)
  if (!verified.ok) {
    log(`stopping: the revised world does not pass: ${verified.problems.join(' | ')}`)
    break
  }

  // 7. Commit.
  phase('Commit')
  const accepted =
    plan === null
      ? (at.acceptedDesign ?? 0)
      : plan.decisions.filter((one) => one.decision === 'accept' && /^P/.test(one.answers)).length
  const committed = await clerk(`commit ${WORLD} ${round} ${reported} runs, ${synthesis.points.length} points, ${accepted} accepted`, undefined, 'commit')
  if (committed.ok === false) {
    log(`stopping: round ${round} is played but not committed: ${committed.problems.join(' | ')}`)
    break
  }
  played += 1
  status = await clerk(`status ${WORLD}`, undefined, 'status')
  const now = status.rounds.find((one) => one.round === round)
  summary.push({ round, runs: reported, points: synthesis.points.length, acceptedDesign: now.acceptedDesign, figures: now.figures })

  // Two rounds with no accepted design point and flat metrics: the loop has converged.
  quiet = now.acceptedDesign === 0 && flat(now.figures, previous?.figures ?? null) ? quiet + 1 : 0
  if (quiet >= 2) {
    log('stopping: two rounds with no accepted design point and flat metrics')
    break
  }
}

return { world: WORLD, rounds: summary }
