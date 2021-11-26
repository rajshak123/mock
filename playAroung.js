const ss = {
    "/quiz": {
        "get": {
            "description": "Get quiz object",
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean",
                                        "example": true,
                                        "description": "successful or not"
                                    },
                                    "data": {
                                        "type": "object",
                                        "properties": {
                                            "quiz": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "id": {
                                                            "type": "string",
                                                            "example": "questionID1"
                                                        },
                                                        "question": {
                                                            "type": "string",
                                                            "example": "How long have you been investing?"
                                                        },
                                                        "options": {
                                                            "type": "array",
                                                            "items": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "id": {
                                                                        "type": "string",
                                                                        "example": "answerID1"
                                                                    },
                                                                    "answer": {
                                                                        "type": "string",
                                                                        "example": "Never invested"
                                                                    },
                                                                    "weightage": {
                                                                        "type": "number",
                                                                        "example": 0.1
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "multiSelect": {
                                                            "type": "boolean",
                                                            "example": true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "errorMessage": {
                                        "type": "string",
                                        "example": "",
                                        "description": "error message"
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    "$ref": "#/components/responses/UnauthorizedError"
                }
            }
        },
        "post": {
            "description": "Save questions and answers to quiz along with score",
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "quizAnswers": {
                                    "type": "object",
                                    "properties": {
                                        "<questionId1>": {
                                            "type": "string",
                                            "example": "<answerId1>",
                                            "description": "question answer set"
                                        },
                                        "<questionId2>": {
                                            "type": "string",
                                            "example": "<answerId2>",
                                            "description": "question answer set"
                                        }
                                    }
                                },
                                "score": {
                                    "type": "integer",
                                    "example": 10,
                                    "description": "Calculated score of the quiz"
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean",
                                        "example": true,
                                        "description": "successful or not"
                                    },
                                    "errorMessage": {
                                        "type": "string",
                                        "example": "",
                                        "description": "error message"
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    "$ref": "#/components/responses/UnauthorizedError"
                }
            }
        }
    }
}