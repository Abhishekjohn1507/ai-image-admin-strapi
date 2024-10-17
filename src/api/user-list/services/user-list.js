'use strict';

/**
 * user-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-list.user-list');
