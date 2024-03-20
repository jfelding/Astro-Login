import { repairedObject, repairedStatus, fixer, repairCafe, fixerRepairedObject } from './config'; // Assuming these are exported from your config.ts file
import { execute } from 'astro:db'; // Assuming you have access to the Astro DB execution API

async function seedDatabase() {
	try {
		// Insert initial repaired objects
		await execute(repairedObject.insertRow({
			repairId: '1',
			brand: 'Brand A',
			model: 'Model 1',
			weight_g: 500
		}));

		// Insert initial repaired statuses
		await execute(repairedStatus.insertRow({
			statusId: '1',
			repairId: '1',
			status: 'Fixed',
			date: new Date(),
			notes: 'Repaired successfully'
		}));

		// Insert initial fixers
		await execute(fixer.insertRow({
			fixerId: '1',
			name: 'John Doe',
			email: 'john@example.com',
			phoneNumber: '1234567890',
			dateCreated: new Date(),
			dateUpdated: new Date(),
			fixerActive: true
		}));

		// Insert initial repair cafes
		await execute(repairCafe.insertRow({
			repairCafeId: '1',
			name: 'Cafe A',
			location: 'Location A',
			isActive: true,
			dateCreated: new Date(),
			dateUpdated: new Date()
		}));

		// Insert initial fixer-repaired object mappings
		await execute(fixerRepairedObject.insertRow({
			fixerId: '1',
			repairId: '1',
			repairCafeId: '1'
		}));

		console.log('Seed data inserted successfully.');
	} catch (error) {
		console.error('Error seeding database:', error);
	}
}

seedDatabase();
