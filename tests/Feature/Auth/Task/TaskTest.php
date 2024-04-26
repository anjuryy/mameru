<?php
    namespace Tests\Feature;

use App\Models\Todo;
use App\Models\User;
    use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Crypt;
use Tests\TestCase;

    class TaskTest extends TestCase
    {
        // use RefreshDatabase;

        public function test_task_page_is_displayed(): void
        {
            $user = User::factory()->create();

            $response = $this
                ->actingAs($user)
                ->get('/todo');

            $response->assertOk();
        }

        public function test_task_create_page_is_displayed(): void
        {
            $user = User::factory()->create();

            $response = $this
                ->actingAs($user)
                ->get('/todo/create');

            $response->assertOk();
        }

        public function test_task_store_data()
        {
            $user = User::factory()->create();

            $response = $this
                ->actingAs($user)
                ->post('/todo', [
                    'name' => 'sample',
                    'task_desc' => 'sample',
                    'deadline' => '2024-01-01 00:00:00'
                ]);

            $response
                ->assertSessionHasNoErrors()
                ->assertRedirect('/todo');
        }

        public function test_task_update_data()
        {
            // Create a user
            $user = User::factory()->create();

            // Create a todo task
            $todo = Todo::factory()->create([
                'by_user_id' => $user->id, // Associate the todo task with the user
            ]);

            // Define the updated task data
            $updatedData = [
                'name' => 'sample',
                'task_desc' => 'sample',
                'deadline' => '2024-01-01 00:00:00',
                'completed' => true // Assuming completed status is a boolean value
            ];

            $encrypted_id = Crypt::encryptString($todo->id);

            // Make a PATCH request to update the todo task, including the todo ID
            $response = $this->actingAs($user)->patch("/todo/{$encrypted_id}", $updatedData);

            // Assert that there are no session errors and the user is redirected to the todo list page
            $response->assertSessionHasNoErrors()->assertRedirect('/todo');
        }


    }
?>
