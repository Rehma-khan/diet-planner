// BMI Calculator
    document.getElementById('bmiForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);

      if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let category = "";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal";
        else category = "Overweight";

        document.getElementById('bmiResult').innerHTML = `
          <h3>Your BMI: ${bmi}</h3>
          <p>Category: <strong>${category}</strong></p>
        `;

        let mealHTML = generateMealPlan(category);
        document.getElementById("mealPlan").innerHTML = mealHTML;

      } else {
        document.getElementById('bmiResult').innerHTML = "<p>Please enter valid values.</p>";
      }
    });

    
    // Review Form
    document.getElementById('submitReviewForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && message) {
        document.getElementById('formMessage').textContent = "Thank you for your feedback!";
        document.getElementById('submitReviewForm').reset();
      } else {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
      }
    });

    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (name && email && message) {
        document.getElementById('contactFormMsg').textContent = "Message sent successfully!";
        document.getElementById('contactForm').reset();
      } else {
        document.getElementById('contactFormMsg').textContent = "Please fill in all fields.";
      }
    });

    // Mobile Menu Toggle
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

   
   
   
   
   
   
   
   function generateMealPlan(category) {
  const plans = {
    Underweight: {
      title: "Weight Gain Meal Plan",
      description: "High-calorie, nutrient-dense meals to support healthy weight gain",
      days: [
        {
          day: "Monday",
          meals: [
            {
              type: "Breakfast",
              name: "Peanut Butter Banana Toast",
              image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
              prepTime: "10 mins",
              ingredients: ["Whole wheat bread", "Peanut butter", "Banana", "Honey", "Chia seeds"],
              nutrition: {calories: 450, protein: "15g", carbs: "60g", fat: "18g"},
              instructions: "Toast bread, spread peanut butter, add banana slices, drizzle with honey and sprinkle chia seeds."
            },
            {
              type: "Lunch",
              name: "Chicken & Rice Bowl",
              image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f",
              prepTime: "25 mins",
              ingredients: ["Chicken breast", "Brown rice", "Broccoli", "Avocado", "Olive oil"],
              nutrition: {calories: 650, protein: "45g", carbs: "70g", fat: "22g"},
              instructions: "Cook rice, grill chicken, steam broccoli, slice avocado. Combine with olive oil dressing."
            },
            {
              type: "Dinner",
              name: "Salmon with Sweet Potato",
              image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
              prepTime: "30 mins",
              ingredients: ["Salmon fillet", "Sweet potato", "Asparagus", "Lemon", "Butter"],
              nutrition: {calories: 600, protein: "40g", carbs: "50g", fat: "25g"},
              instructions: "Roast sweet potato, pan-sear salmon, sauté asparagus. Serve with lemon butter sauce."
            }
          ]
        },
        {
          day: "Tuesday",
          meals: [
            {
              type: "Breakfast",
              name: "Greek Yogurt with Nuts",
              image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
              prepTime: "5 mins",
              ingredients: ["Greek yogurt", "Mixed nuts", "Honey", "Granola"],
              nutrition: {calories: 500, protein: "20g", carbs: "40g", fat: "25g"},
              instructions: "Combine yogurt with nuts and granola, drizzle with honey."
            },
            {
              type: "Lunch",
              name: "Beef and Vegetable Stir Fry",
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
              prepTime: "20 mins",
              ingredients: ["Beef strips", "Mixed vegetables", "Soy sauce", "Rice", "Sesame oil"],
              nutrition: {calories: 700, protein: "50g", carbs: "60g", fat: "30g"},
              instructions: "Stir-fry beef and vegetables with sauce, serve over rice."
            },
            {
              type: "Dinner",
              name: "Cheese Omelette with Toast",
              image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
              prepTime: "15 mins",
              ingredients: ["Eggs", "Cheese", "Whole wheat bread", "Butter", "Herbs"],
              nutrition: {calories: 550, protein: "30g", carbs: "40g", fat: "30g"},
              instructions: "Make omelette with cheese, serve with buttered toast."
            }
          ]
        },
        {
          day: "Wednesday",
          meals: [
            {
              type: "Breakfast",
              name: "Avocado Toast with Eggs",
              image: "https://images.unsplash.com/photo-1558585444-6709dd092c3a",
              prepTime: "10 mins",
              ingredients: ["Whole grain bread", "Avocado", "Eggs", "Salt", "Pepper"],
              nutrition: {calories: 400, protein: "18g", carbs: "35g", fat: "22g"},
              instructions: "Toast bread, mash avocado, top with poached eggs and season."
            },
            {
              type: "Lunch",
              name: "Tuna Salad Sandwich",
              image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
              prepTime: "15 mins",
              ingredients: ["Whole wheat bread", "Tuna", "Mayonnaise", "Celery", "Lettuce"],
              nutrition: {calories: 600, protein: "35g", carbs: "45g", fat: "30g"},
              instructions: "Mix tuna with mayo and celery, serve on bread with lettuce."
            },
            {
              type: "Dinner",
              name: "Chicken Alfredo Pasta",
              image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
              prepTime: "25 mins",
              ingredients: ["Pasta", "Chicken breast", "Alfredo sauce", "Parmesan", "Broccoli"],
              nutrition: {calories: 650, protein: "40g", carbs: "60g", fat: "28g"},
              instructions: "Cook pasta and chicken, mix with sauce and broccoli, top with parmesan."
            }
          ]
        },
        {
          day: "Thursday",
          meals: [
            {
              type: "Breakfast",
              name: "Oatmeal with Berries",
              image: "https://images.unsplash.com/photo-1608500218809-7e84b6f0b15a",
              prepTime: "10 mins",
              ingredients: ["Oats", "Milk", "Mixed berries", "Honey", "Almonds"],
              nutrition: {calories: 450, protein: "15g", carbs: "65g", fat: "15g"},
              instructions: "Cook oats with milk, top with berries, honey and almonds."
            },
            {
              type: "Lunch",
              name: "Grilled Cheese with Tomato Soup",
              image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
              prepTime: "20 mins",
              ingredients: ["Bread", "Cheese", "Butter", "Tomato soup"],
              nutrition: {calories: 550, protein: "20g", carbs: "50g", fat: "30g"},
              instructions: "Make grilled cheese sandwich, serve with warm tomato soup."
            },
            {
              type: "Dinner",
              name: "Beef Burger with Sweet Potato Fries",
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
              prepTime: "30 mins",
              ingredients: ["Beef patty", "Burger bun", "Cheese", "Sweet potato", "Olive oil"],
              nutrition: {calories: 700, protein: "45g", carbs: "60g", fat: "35g"},
              instructions: "Grill beef patty, bake sweet potato fries, assemble burger."
            }
          ]
        },
        {
          day: "Friday",
          meals: [
            {
              type: "Breakfast",
              name: "Smoothie Bowl",
              image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
              prepTime: "10 mins",
              ingredients: ["Banana", "Greek yogurt", "Mixed berries", "Granola", "Chia seeds"],
              nutrition: {calories: 500, protein: "20g", carbs: "65g", fat: "15g"},
              instructions: "Blend banana and yogurt, top with berries, granola and chia seeds."
            },
            {
              type: "Lunch",
              name: "Chicken Quesadilla",
              image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
              prepTime: "20 mins",
              ingredients: ["Tortilla", "Chicken", "Cheese", "Bell peppers", "Sour cream"],
              nutrition: {calories: 600, protein: "40g", carbs: "45g", fat: "30g"},
              instructions: "Fill tortilla with chicken and cheese, grill until melted, serve with peppers and sour cream."
            },
            {
              type: "Dinner",
              name: "Shrimp Scampi Pasta",
              image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
              prepTime: "25 mins",
              ingredients: ["Pasta", "Shrimp", "Garlic", "Butter", "White wine", "Parsley"],
              nutrition: {calories: 650, protein: "45g", carbs: "60g", fat: "25g"},
              instructions: "Cook pasta, sauté shrimp with garlic and butter, deglaze with wine, toss with pasta."
            }
          ]
        },
        {
          day: "Saturday",
          meals: [
            {
              type: "Breakfast",
              name: "Pancakes with Maple Syrup",
              image: "https://images.unsplash.com/photo-1554520735-92a6c636d035",
              prepTime: "20 mins",
              ingredients: ["Pancake mix", "Egg", "Milk", "Butter", "Maple syrup"],
              nutrition: {calories: 500, protein: "15g", carbs: "75g", fat: "18g"},
              instructions: "Mix pancake batter, cook on griddle, serve with butter and syrup."
            },
            {
              type: "Lunch",
              name: "Steak with Mashed Potatoes",
              image: "https://images.unsplash.com/photo-1603360946370-7a5385d563a9",
              prepTime: "30 mins",
              ingredients: ["Steak", "Potatoes", "Butter", "Milk", "Green beans"],
              nutrition: {calories: 700, protein: "50g", carbs: "50g", fat: "35g"},
              instructions: "Grill steak, mash potatoes with butter and milk, steam green beans."
            },
            {
              type: "Dinner",
              name: "Vegetable Lasagna",
              image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
              prepTime: "45 mins",
              ingredients: ["Lasagna noodles", "Ricotta cheese", "Tomato sauce", "Zucchini", "Eggplant", "Mozzarella"],
              nutrition: {calories: 600, protein: "30g", carbs: "65g", fat: "25g"},
              instructions: "Layer noodles with cheese, sauce and vegetables, bake until bubbly."
            }
          ]
        },
        {
          day: "Sunday",
          meals: [
            {
              type: "Breakfast",
              name: "French Toast",
              image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
              prepTime: "15 mins",
              ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Maple syrup"],
              nutrition: {calories: 450, protein: "15g", carbs: "60g", fat: "15g"},
              instructions: "Dip bread in egg mixture, cook on griddle, serve with syrup."
            },
            {
              type: "Lunch",
              name: "BBQ Chicken Pizza",
              image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
              prepTime: "30 mins",
              ingredients: ["Pizza dough", "BBQ sauce", "Chicken", "Red onion", "Mozzarella"],
              nutrition: {calories: 650, protein: "40g", carbs: "70g", fat: "25g"},
              instructions: "Top dough with sauce, chicken and cheese, bake until golden."
            },
            {
              type: "Dinner",
              name: "Beef Tacos",
              image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
              prepTime: "25 mins",
              ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheese", "Sour cream"],
              nutrition: {calories: 600, protein: "35g", carbs: "45g", fat: "30g"},
              instructions: "Cook beef with seasoning, fill taco shells with toppings."
            }
          ]
        }
      ]
    },
    Normal: {
      title: "Balanced Meal Plan",
      description: "Maintain your healthy weight with these balanced meals",
      days: [
        {
          day: "Monday",
          meals: [
            {
              type: "Breakfast",
              name: "Greek Yogurt Parfait",
              image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
              prepTime: "5 mins",
              ingredients: ["Greek yogurt", "Mixed berries", "Granola", "Honey"],
              nutrition: {calories: 350, protein: "20g", carbs: "45g", fat: "10g"},
              instructions: "Layer yogurt, berries and granola in a bowl. Drizzle with honey."
            },
            {
              type: "Lunch",
              name: "Quinoa Salad",
              image: "https://images.unsplash.com/photo-1546069901-4567baa0d6e7",
              prepTime: "20 mins",
              ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Feta cheese", "Olive oil"],
              nutrition: {calories: 500, protein: "18g", carbs: "60g", fat: "20g"},
              instructions: "Cook quinoa, chop vegetables, mix with feta and olive oil dressing."
            },
            {
              type: "Dinner",
              name: "Turkey Meatballs with Pasta",
              image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
              prepTime: "35 mins",
              ingredients: ["Ground turkey", "Whole wheat pasta", "Tomato sauce", "Parmesan", "Herbs"],
              nutrition: {calories: 550, protein: "35g", carbs: "65g", fat: "18g"},
              instructions: "Form and bake turkey meatballs, cook pasta, combine with sauce and top with parmesan."
            }
          ]
        },
        {
          day: "Tuesday",
          meals: [
            {
              type: "Breakfast",
              name: "Avocado Toast with Eggs",
              image: "https://images.unsplash.com/photo-1558585444-6709dd092c3a",
              prepTime: "10 mins",
              ingredients: ["Whole grain bread", "Avocado", "Eggs", "Salt", "Pepper"],
              nutrition: {calories: 400, protein: "18g", carbs: "35g", fat: "22g"},
              instructions: "Toast bread, mash avocado, top with poached eggs and season."
            },
            {
              type: "Lunch",
              name: "Grilled Chicken Wrap",
              image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
              prepTime: "15 mins",
              ingredients: ["Whole wheat wrap", "Grilled chicken", "Lettuce", "Tomato", "Yogurt dressing"],
              nutrition: {calories: 450, protein: "30g", carbs: "40g", fat: "18g"},
              instructions: "Fill wrap with chicken and vegetables, add dressing and roll."
            },
            {
              type: "Dinner",
              name: "Vegetable Curry with Rice",
              image: "https://images.unsplash.com/photo-1547592180-85f173990554",
              prepTime: "30 mins",
              ingredients: ["Mixed vegetables", "Coconut milk", "Curry paste", "Rice", "Herbs"],
              nutrition: {calories: 500, protein: "15g", carbs: "70g", fat: "18g"},
              instructions: "Cook vegetables in curry sauce, serve with rice."
            }
          ]
        },
        {
          day: "Wednesday",
          meals: [
            {
              type: "Breakfast",
              name: "Smoothie Bowl",
              image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
              prepTime: "10 mins",
              ingredients: ["Banana", "Greek yogurt", "Mixed berries", "Granola", "Chia seeds"],
              nutrition: {calories: 400, protein: "20g", carbs: "60g", fat: "10g"},
              instructions: "Blend banana and yogurt, top with berries, granola and chia seeds."
            },
            {
              type: "Lunch",
              name: "Tuna Salad Sandwich",
              image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
              prepTime: "15 mins",
              ingredients: ["Whole wheat bread", "Tuna", "Greek yogurt", "Celery", "Lettuce"],
              nutrition: {calories: 450, protein: "30g", carbs: "40g", fat: "15g"},
              instructions: "Mix tuna with yogurt and celery, serve on bread with lettuce."
            },
            {
              type: "Dinner",
              name: "Baked Salmon with Vegetables",
              image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
              prepTime: "25 mins",
              ingredients: ["Salmon fillet", "Asparagus", "Cherry tomatoes", "Lemon", "Olive oil"],
              nutrition: {calories: 500, protein: "35g", carbs: "20g", fat: "30g"},
              instructions: "Season salmon and vegetables, bake until cooked through, serve with lemon."
            }
          ]
        },
        {
          day: "Thursday",
          meals: [
            {
              type: "Breakfast",
              name: "Oatmeal with Nuts",
              image: "https://images.unsplash.com/photo-1608500218809-7e84b6f0b15a",
              prepTime: "10 mins",
              ingredients: ["Oats", "Almond milk", "Walnuts", "Cinnamon", "Honey"],
              nutrition: {calories: 350, protein: "12g", carbs: "50g", fat: "15g"},
              instructions: "Cook oats with milk, top with nuts, cinnamon and honey."
            },
            {
              type: "Lunch",
              name: "Chickpea Salad",
              image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
              prepTime: "15 mins",
              ingredients: ["Chickpeas", "Cucumber", "Red onion", "Parsley", "Lemon juice"],
              nutrition: {calories: 400, protein: "15g", carbs: "60g", fat: "10g"},
              instructions: "Combine all ingredients, toss with lemon juice and olive oil."
            },
            {
              type: "Dinner",
              name: "Chicken Stir Fry",
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
              prepTime: "20 mins",
              ingredients: ["Chicken breast", "Broccoli", "Bell peppers", "Soy sauce", "Brown rice"],
              nutrition: {calories: 500, protein: "40g", carbs: "50g", fat: "15g"},
              instructions: "Stir-fry chicken and vegetables with sauce, serve over rice."
            }
          ]
        },
        {
          day: "Friday",
          meals: [
            {
              type: "Breakfast",
              name: "Scrambled Eggs with Toast",
              image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
              prepTime: "10 mins",
              ingredients: ["Eggs", "Whole wheat bread", "Butter", "Salt", "Pepper"],
              nutrition: {calories: 350, protein: "20g", carbs: "30g", fat: "15g"},
              instructions: "Scramble eggs, toast bread, serve with butter."
            },
            {
              type: "Lunch",
              name: "Lentil Soup",
              image: "https://images.unsplash.com/photo-1547592180-85f173990554",
              prepTime: "25 mins",
              ingredients: ["Lentils", "Carrots", "Celery", "Onion", "Vegetable broth"],
              nutrition: {calories: 400, protein: "20g", carbs: "60g", fat: "5g"},
              instructions: "Cook lentils with vegetables in broth until tender."
            },
            {
              type: "Dinner",
              name: "Grilled Shrimp Skewers",
              image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
              prepTime: "20 mins",
              ingredients: ["Shrimp", "Zucchini", "Bell peppers", "Lemon", "Olive oil"],
              nutrition: {calories: 450, protein: "35g", carbs: "20g", fat: "25g"},
              instructions: "Skewer shrimp and vegetables, grill until cooked, serve with lemon."
            }
          ]
        },
        {
          day: "Saturday",
          meals: [
            {
              type: "Breakfast",
              name: "Pancakes with Berries",
              image: "https://images.unsplash.com/photo-1554520735-92a6c636d035",
              prepTime: "20 mins",
              ingredients: ["Whole wheat pancake mix", "Egg", "Milk", "Mixed berries", "Maple syrup"],
              nutrition: {calories: 400, protein: "15g", carbs: "60g", fat: "10g"},
              instructions: "Make pancakes, top with berries and a drizzle of syrup."
            },
            {
              type: "Lunch",
              name: "Turkey Burger",
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
              prepTime: "25 mins",
              ingredients: ["Ground turkey", "Whole wheat bun", "Lettuce", "Tomato", "Avocado"],
              nutrition: {calories: 500, protein: "35g", carbs: "40g", fat: "25g"},
              instructions: "Form and grill turkey patty, serve on bun with toppings."
            },
            {
              type: "Dinner",
              name: "Vegetable Lasagna",
              image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
              prepTime: "45 mins",
              ingredients: ["Lasagna noodles", "Ricotta cheese", "Spinach", "Zucchini", "Tomato sauce"],
              nutrition: {calories: 500, protein: "25g", carbs: "60g", fat: "20g"},
              instructions: "Layer noodles with cheese and vegetables, bake until bubbly."
            }
          ]
        },
        {
          day: "Sunday",
          meals: [
            {
              type: "Breakfast",
              name: "French Toast",
              image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
              prepTime: "15 mins",
              ingredients: ["Whole wheat bread", "Eggs", "Milk", "Cinnamon", "Maple syrup"],
              nutrition: {calories: 400, protein: "15g", carbs: "50g", fat: "15g"},
              instructions: "Dip bread in egg mixture, cook on griddle, serve with syrup."
            },
            {
              type: "Lunch",
              name: "Grilled Chicken Salad",
              image: "https://images.unsplash.com/photo-1546069901-4567baa0d6e7",
              prepTime: "20 mins",
              ingredients: ["Grilled chicken", "Mixed greens", "Cucumber", "Cherry tomatoes", "Balsamic vinaigrette"],
              nutrition: {calories: 450, protein: "35g", carbs: "20g", fat: "25g"},
              instructions: "Combine all ingredients, toss with dressing."
            },
            {
              type: "Dinner",
              name: "Beef and Broccoli",
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
              prepTime: "25 mins",
              ingredients: ["Beef strips", "Broccoli", "Soy sauce", "Garlic", "Brown rice"],
              nutrition: {calories: 500, protein: "40g", carbs: "50g", fat: "20g"},
              instructions: "Stir-fry beef and broccoli with sauce, serve over rice."
            }
          ]
        }
      ]
    },
    Overweight: {
      title: "Weight Loss Meal Plan",
      description: "Lower calorie meals designed for healthy weight loss",
      days: [
        {
          day: "Monday",
          meals: [
            {
              type: "Breakfast",
              name: "Vegetable Omelette",
              image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
              prepTime: "15 mins",
              ingredients: ["Eggs", "Spinach", "Mushrooms", "Bell peppers", "Olive oil"],
              nutrition: {calories: 300, protein: "20g", carbs: "10g", fat: "20g"},
              instructions: "Sauté vegetables, pour beaten eggs, cook until set."
            },
            {
              type: "Lunch",
              name: "Grilled Chicken Salad",
              image: "https://images.unsplash.com/photo-1546069901-4567baa0d6e7",
              prepTime: "20 mins",
              ingredients: ["Chicken breast", "Mixed greens", "Cucumber", "Tomato", "Balsamic vinegar"],
              nutrition: {calories: 400, protein: "35g", carbs: "15g", fat: "20g"},
              instructions: "Grill chicken, chop vegetables, toss with greens and balsamic dressing."
            },
            {
              type: "Dinner",
              name: "Baked Cod with Vegetables",
              image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
              prepTime: "25 mins",
              ingredients: ["Cod fillet", "Zucchini", "Bell peppers", "Lemon", "Herbs"],
              nutrition: {calories: 350, protein: "30g", carbs: "20g", fat: "15g"},
              instructions: "Season fish, bake with vegetables until cooked through, serve with lemon."
            }
          ]
        },
        {
          day: "Tuesday",
          meals: [
            {
              type: "Breakfast",
              name: "Berry Smoothie Bowl",
              image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
              prepTime: "10 mins",
              ingredients: ["Mixed berries", "Banana", "Greek yogurt", "Almond milk", "Chia seeds"],
              nutrition: {calories: 300, protein: "15g", carbs: "45g", fat: "8g"},
              instructions: "Blend fruits with yogurt and milk, top with chia seeds."
            },
            {
              type: "Lunch",
              name: "Turkey Lettuce Wraps",
              image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
              prepTime: "15 mins",
              ingredients: ["Ground turkey", "Lettuce leaves", "Carrots", "Cucumber", "Soy sauce"],
              nutrition: {calories: 350, protein: "30g", carbs: "15g", fat: "18g"},
              instructions: "Cook turkey with sauce, serve in lettuce leaves with vegetables."
            },
            {
              type: "Dinner",
              name: "Grilled Shrimp with Quinoa",
              image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
              prepTime: "25 mins",
              ingredients: ["Shrimp", "Quinoa", "Lemon", "Garlic", "Olive oil"],
              nutrition: {calories: 400, protein: "35g", carbs: "40g", fat: "12g"},
              instructions: "Grill shrimp, cook quinoa, combine with lemon garlic dressing."
            }
          ]
        },
        {
          day: "Wednesday",
          meals: [
            {
              type: "Breakfast",
              name: "Avocado Toast",
              image: "https://images.unsplash.com/photo-1558585444-6709dd092c3a",
              prepTime: "10 mins",
              ingredients: ["Whole grain bread", "Avocado", "Red pepper flakes", "Lemon juice"],
              nutrition: {calories: 250, protein: "8g", carbs: "25g", fat: "15g"},
              instructions: "Toast bread, mash avocado, top with lemon juice and pepper flakes."
            },
            {
              type: "Lunch",
              name: "Tuna Salad",
              image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
              prepTime: "15 mins",
              ingredients: ["Tuna", "Greek yogurt", "Celery", "Lemon juice", "Mixed greens"],
              nutrition: {calories: 300, protein: "30g", carbs: "10g", fat: "15g"},
              instructions: "Mix tuna with yogurt and celery, serve over greens with lemon."
            },
            {
              type: "Dinner",
              name: "Vegetable Stir Fry",
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
              prepTime: "20 mins",
              ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Brown rice"],
              nutrition: {calories: 350, protein: "10g", carbs: "60g", fat: "10g"},
              instructions: "Stir-fry vegetables with sauce, serve over rice."
            }
          ]
        },
        {
          day: "Thursday",
          meals: [
            {
              type: "Breakfast",
              name: "Greek Yogurt with Berries",
              image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
              prepTime: "5 mins",
              ingredients: ["Greek yogurt", "Mixed berries", "Chia seeds"],
              nutrition: {calories: 200, protein: "15g", carbs: "20g", fat: "5g"},
              instructions: "Combine yogurt with berries and chia seeds."
            },
            {
              type: "Lunch",
              name: "Grilled Chicken Wrap",
              image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
              prepTime: "15 mins",
              ingredients: ["Whole wheat wrap", "Grilled chicken", "Spinach", "Tomato", "Mustard"],
              nutrition: {calories: 350, protein: "30g", carbs: "30g", fat: "12g"},
              instructions: "Fill wrap with chicken and vegetables, add mustard and roll."
            },
            {
              type: "Dinner",
              name: "Baked Salmon with Asparagus",
              image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
              prepTime: "25 mins",
              ingredients: ["Salmon fillet", "Asparagus", "Lemon", "Olive oil", "Dill"],
              nutrition: {calories: 400, protein: "35g", carbs: "10g", fat: "25g"},
              instructions: "Season salmon and asparagus, bake until cooked through."
            }
          ]
        },
        {
          day: "Friday",
          meals: [
            {
              type: "Breakfast",
              name: "Oatmeal with Cinnamon",
              image: "https://images.unsplash.com/photo-1608500218809-7e84b6f0b15a",
              prepTime: "10 mins",
              ingredients: ["Oats", "Almond milk", "Cinnamon", "Walnuts"],
              nutrition: {calories: 250, protein: "10g", carbs: "35g", fat: "10g"},
              instructions: "Cook oats with milk, top with cinnamon and walnuts."
            },
            {
              type: "Lunch",
              name: "Lentil Soup",
              image: "https://images.unsplash.com/photo-1547592180-85f173990554",
              prepTime: "25 mins",
              ingredients: ["Lentils", "Carrots", "Celery", "Onion", "Vegetable broth"],
              nutrition: {calories: 300, protein: "20g", carbs: "50g", fat: "5g"},
              instructions: "Cook lentils with vegetables in broth until tender."
            },
            {
              type: "Dinner",
              name: "Turkey Meatballs with Zucchini Noodles",
              image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
              prepTime: "30 mins",
              ingredients: ["Ground turkey", "Zucchini", "Tomato sauce", "Parmesan"],
              nutrition: {calories: 350, protein: "30g", carbs: "20g", fat: "15g"},
              instructions: "Form and bake turkey meatballs, spiralize zucchini, top with sauce and parmesan."
            }
          ]
        },
        {
          day: "Saturday",
          meals: [
            {
              type: "Breakfast",
              name: "Scrambled Eggs with Spinach",
              image: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4",
              prepTime: "10 mins",
              ingredients: ["Eggs", "Spinach", "Olive oil", "Salt", "Pepper"],
              nutrition: {calories: 250, protein: "20g", carbs: "5g", fat: "18g"},
              instructions: "Sauté spinach, scramble eggs, combine and season."
            },
            {
              type: "Lunch",
              name: "Grilled Shrimp Salad",
              image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
              prepTime: "20 mins",
              ingredients: ["Shrimp", "Mixed greens", "Cherry tomatoes", "Cucumber", "Lemon vinaigrette"],
              nutrition: {calories: 300, protein: "30g", carbs: "15g", fat: "15g"},
              instructions: "Grill shrimp, combine with vegetables, toss with dressing."
            },
            {
              type: "Dinner",
              name: "Vegetable Stir Fry with Tofu",
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
              prepTime: "25 mins",
              ingredients: ["Tofu", "Broccoli", "Bell peppers", "Soy sauce", "Brown rice"],
              nutrition: {calories: 350, protein: "25g", carbs: "40g", fat: "12g"},
              instructions: "Stir-fry tofu and vegetables with sauce, serve over rice."
            }
          ]
        },
        {
          day: "Sunday",
          meals: [
            {
              type: "Breakfast",
              name: "Smoothie Bowl",
              image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
              prepTime: "10 mins",
              ingredients: ["Banana", "Greek yogurt", "Blueberries", "Chia seeds"],
              nutrition: {calories: 250, protein: "15g", carbs: "35g", fat: "5g"},
              instructions: "Blend banana and yogurt, top with blueberries and chia seeds."
            },
            {
              type: "Lunch",
              name: "Grilled Chicken with Roasted Vegetables",
              image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
              prepTime: "30 mins",
              ingredients: ["Chicken breast", "Sweet potato", "Brussels sprouts", "Olive oil"],
              nutrition: {calories: 400, protein: "35g", carbs: "30g", fat: "15g"},
              instructions: "Season chicken and vegetables, roast until cooked through."
            },
            {
              type: "Dinner",
              name: "Baked Cod with Steamed Vegetables",
              image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
              prepTime: "25 mins",
              ingredients: ["Cod fillet", "Broccoli", "Carrots", "Lemon", "Herbs"],
              nutrition: {calories: 350, protein: "30g", carbs: "20g", fat: "15g"},
              instructions: "Season fish and vegetables, bake until cooked through, serve with lemon."
            }
          ]
        }
      ]
    }
  };

  let html = `
    <div class="plan-header">
      <h3>${plans[category].title}</h3>
      <p>${plans[category].description}</p>
    </div>
  `;

  plans[category].days.forEach(day => {
    html += `
      <div class="day-plan">
        <h4>${day.day}</h4>
    `;

    day.meals.forEach(meal => {
      html += `
        <div class="meal-card">
          <h5 class="meal-title">${meal.type}: ${meal.name}</h5>
          <img src="${meal.image}" alt="${meal.name}" class="meal-image">
          <p><strong>Prep Time:</strong> ${meal.prepTime}</p>
          <div class="nutrition-info">
            <span class="nutrition-badge">${meal.nutrition.calories} kcal</span>
            <span class="nutrition-badge">Protein: ${meal.nutrition.protein}</span>
            <span class="nutrition-badge">Carbs: ${meal.nutrition.carbs}</span>
            <span class="nutrition-badge">Fat: ${meal.nutrition.fat}</span>
          </div>
          <div class="meal-details">
            <h4>Ingredients:</h4>
            <ul>${meal.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
            <h4>Instructions:</h4>
            <p>${meal.instructions}</p>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  return html;
}
       
            
             
         

        

      
    
    
    // Initialize when page loads
    document.addEventListener('DOMContentLoaded', function() {
      checkAuth();
      
      // Smooth scrolling for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });
