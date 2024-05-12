import { Page } from "@playwright/test";


export default class TodoPage {
    private get welcomeMassage() {
        return `[data-testid=welcome]`;
    }

    private get deleteIcon() {
        return '[data-testid=delete]';
    }

    private get noTodosMassage() {
        return '[data-testid=no-todos]';
    }

    private get todoItem() {
        return '[data-testid=todo-item]';
    }

    async load(page: Page) {
        await page.goto('/todo');
    }

    getWelcomeMassageElement(page: Page) {
        return page.locator(this.welcomeMassage);
    }

    async deleteTodo(page: Page) {
        await page.click(this.deleteIcon);
    }

    async getNoTodosMessage(page: Page) {
        return page.locator(this.noTodosMassage);
    }

    async getTodoItem(page: Page) {
        return page.locator(this.todoItem);
    }
}