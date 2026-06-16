const swaggerSpec = {
  openapi: '3.0.3',
  info: {
    title: 'Bookstore API',
    version: '1.0.0',
    description: 'API for creating, reading, updating, and deleting books.'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server'
    }
  ],
  tags: [
    {
      name: 'Books',
      description: 'Book management endpoints'
    }
  ],
  paths: {
    '/api/books': {
      post: {
        tags: ['Books'],
        summary: 'Add a new book',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BookInput'
              },
              example: {
                title: 'Things Fall Apart',
                author: 'Chinua Achebe',
                price: 12.5
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Book created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Book'
                }
              }
            }
          },
          400: {
            description: 'Invalid book data',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
              }
            }
          }
        }
      },
      get: {
        tags: ['Books'],
        summary: 'Get all books',
        responses: {
          200: {
            description: 'List of books',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Book'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/books/{id}': {
      get: {
        tags: ['Books'],
        summary: 'Get one book by id',
        parameters: [
          {
            $ref: '#/components/parameters/BookId'
          }
        ],
        responses: {
          200: {
            description: 'Book found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Book'
                }
              }
            }
          },
          404: {
            description: 'Book not found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
              }
            }
          }
        }
      },
      put: {
        tags: ['Books'],
        summary: 'Update a book by id',
        parameters: [
          {
            $ref: '#/components/parameters/BookId'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BookInput'
              },
              example: {
                title: 'Things Fall Apart',
                author: 'Chinua Achebe',
                price: 15
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Book updated successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Book'
                }
              }
            }
          },
          400: {
            description: 'Invalid book data',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
              }
            }
          },
          404: {
            description: 'Book not found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
              }
            }
          }
        }
      },
      delete: {
        tags: ['Books'],
        summary: 'Delete a book by id',
        parameters: [
          {
            $ref: '#/components/parameters/BookId'
          }
        ],
        responses: {
          200: {
            description: 'Book deleted successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/DeleteResponse'
                }
              }
            }
          },
          404: {
            description: 'Book not found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    parameters: {
      BookId: {
        name: 'id',
        in: 'path',
        required: true,
        description: 'MongoDB ObjectId of the book',
        schema: {
          type: 'string',
          example: '685000000000000000000000'
        }
      }
    },
    schemas: {
      BookInput: {
        type: 'object',
        required: ['title', 'author', 'price'],
        properties: {
          title: {
            type: 'string',
            example: 'Things Fall Apart'
          },
          author: {
            type: 'string',
            example: 'Chinua Achebe'
          },
          price: {
            type: 'number',
            example: 12.5
          }
        }
      },
      Book: {
        allOf: [
          {
            $ref: '#/components/schemas/BookInput'
          },
          {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '685000000000000000000000'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        ]
      },
      DeleteResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Book deleted successfully'
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Book not found'
          }
        }
      }
    }
  }
};

const swaggerOptions = {
  customSiteTitle: 'Bookstore API Docs'
};

module.exports = {
  swaggerSpec,
  swaggerOptions
};
