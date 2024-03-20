import { defineDb, defineTable, column } from 'astro:db';

const repairCafe = defineTable({
  columns: {
    repairCafeId: column.text({ primaryKey: true, indexed: true }), // Removed function call for default value
    name: column.text(),
    location: column.text(),
    isActive: column.boolean(),
    dateCreated: column.date(),
    dateUpdated: column.date(),
  }
});

const repairedObject = defineTable({
  columns: {
    repairId: column.text({ primaryKey: true, indexed: true }), // Removed function call for default value
    brand: column.text(),
    model: column.text(),
    weight_g: column.number(),
  }
});

const repairedStatus = defineTable({
  columns: {
    statusId: column.text({ primaryKey: true, indexed: true }), // Removed function call for default value
    repairId: column.text({ foreignKey: true, references: () => repairedObject.columns.repairId, indexed: true }),
    status: column.text(),
    date: column.date(),
    notes: column.text(),
  }
});

const fixer = defineTable({
  columns: {
    fixerId: column.text({ primaryKey: true, indexed: true }), // Removed function call for default value
    name: column.text(),
    email: column.text(),
    phoneNumber: column.text(),
    dateCreated: column.date(),
    dateUpdated: column.date(),
    fixerActive: column.boolean(),
  }
});

const fixerRepairedObject = defineTable({
  columns: {
    fixerId: column.text({ foreignKey: true, references: () => fixer.columns.fixerId, indexed: true }),
    repairId: column.text({ foreignKey: true, references: () => repairedObject.columns.repairId, indexed: true }),
    repairCafeId: column.text({ foreignKey: true, references: () => repairCafe.columns.repairCafeId, indexed: true }),
  }
});

export default defineDb({
  tables: {
    repaired_object: [repairedObject],
    repaired_status: [repairedStatus],
    fixer: [fixer],
    fixer_repaired_object: [fixerRepairedObject],
    repair_cafe: [repairCafe]
  }
});
