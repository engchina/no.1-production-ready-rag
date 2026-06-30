import type { DocumentRecipeView } from "@/lib/api";

export function resolveSelectedRecipe(
  recipes: DocumentRecipeView[],
  requestedRecipeId: string | null
) {
  return recipes.find((recipe) => recipe.recipe_id === requestedRecipeId) ?? recipes[0] ?? null;
}

export function recipeIsActive(recipe: DocumentRecipeView) {
  return recipe.steps.some((step) => step.status === "QUEUED" || step.status === "RUNNING");
}

export function canAddRecipe(recipeCount: number) {
  return recipeCount < 3;
}

export function canDeleteRecipe(recipeCount: number, active: boolean) {
  return recipeCount > 1 && !active;
}

