import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ServiceCardComponent } from '../../../../../components/service-card/service-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    ServiceCardComponent,
    RouterModule
  ]
})
export class HomePage {
  consultationDescription = `
  <p>I offer individual consultations on a range of conditions.</p>
  <p>Dietary advice on the internet can be conflicting and confusing. I will give you expert, evidence based advice to help you achieve your goals.</p>
   <br>
  <p>Examples of conditions that I can help with:</p>
  <br>
  <ul class="list-disc list-inside space-y-1">
    <li>Irritable Bowel Syndrome (IBS)</li>
    <li>Inflammatory Bowel Disease (IBD)</li>
    <li>Coeliac Disease</li>
    <li>Stomas</li>
    <li>Liver disease</li>
    <li>Diverticular Disease</li>
    <li>Bile acid malabsorption (BAM)</li>
    <li>Heart Disease</li>
    <li>High Cholesterol</li>
    <li>Unintentional Weight loss</li>
    <li>Vegan/Vegetarian Diet</li>
    <li>Healthy eating and gut health</li>
  </ul>
  <br>
  <p>Get in contact to find out more or book a free 15 minute discovery call.</p>
`;

  ibsDescription = `
  <p>I can help those with digestive disorders including Irritable Bowel Syndrome (IBS), to achieve symptom control.</p>
   <br>
  <p>Symptoms of functional gut disorders such as bloating, abdominal pain, wind, constipation and diarrhoea can be debilitating and really affect quality of life.</p>
   <br>
  <p>I have 9 years of experience treating people with functional gut disorders. I use the latest evidence based advice to make an individualised nutritional plan that fits in with your lifestyle.</p>
   <br>
  <p>I am fully trained in the Low FODMAP diet, which is a diet developed by Monash University in Australia and adapted by Kings College London for the UK to help with symptom management in people with IBS. I give practical advice and tips on how to follow the diet, and how to reintroduce foods after following the diet. This is essential in order to determine which foods you may be sensitive to, and to achieve a long term diet that is as varied as possible. Please note that this diet is not appropriate for everyone and other advice may be given to try first.</p>
   <br>
  <p>Get in contact to find out more or book a free 15 minute discovery call.</p>
`;

  ibdDescription = `
  <p>Deciding what to eat when you have Inflammatory Bowel Disease (IBD) can feel overwhelming. There is a lot of conflicting and contradictory information on the internet, which can make it hard to know what to eat for good health and to manage symptoms.</p>
   <br>
  <p>I have experience working with a hospital IBD Gastroenterology Team for 9 years. I can give you evidence based, individualised and practical advice on what to eat during a flare up and what to eat during remission.</p>
   <br>
  <p>I can assess your diet and help you meet your micronutrient and macronutrient needs. I can give you advice on how to manage and prevent symptoms, and how to prevent weight loss and nutritional deficiencies if you are struggling with eating.</p>
   <br>
  <p>Get in contact to find out more or book a free 15 minute discovery call.</p>
`;

  dietaryAnalysisDescription = `
  <p>Would you like to know whether your diet is balanced or if you are reaching specific micronutrient and macronutrient targets?</p>
   <br>
  <p>I can analyse your diet using nutritional analysis software and provide you with a detailed breakdown of the macronutrients and micronutrients in your diet in an easy to understand format.</p>
   <br>
  <p>Get in contact to find out more or book a free 15 minute discovery call.</p>
`;

  mealPlanningDescription = `
  <p>Would you like an easy to follow meal plan that meets your nutritional goals in micronutrients and macronutrients?</p>
   <br>
  <p>I can provide you with a practical meal plan and shopping list to make weekly meal planning quicker and easier.</p>
   <br>
  <p>Get in contact to find out more or book a free 15 minute discovery call.</p>
`;




}
