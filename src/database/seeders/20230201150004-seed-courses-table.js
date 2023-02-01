'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query(
      'SELECT id FROM categories;'
    )

    await queryInterface.bulkInsert('courses', [
      {
        name: 'Programador Full-stack Javascript',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Micro-serviços com Node.js',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'TDD na Prática: Testando APIs Node.js',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'TDD na Prática: Testando Aplicações React',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        featured: true,
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Especialista Front-end: React',
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
