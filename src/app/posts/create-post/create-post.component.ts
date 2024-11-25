import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.action';
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private store: Store) {

  }

  onSubmit() {
    console.log(this.postForm.value);
    if (this.postForm.valid) {
      this.store.dispatch(addPost({
        post: {
          title: this.postForm.value.title || '', 
          description: this.postForm.value.description || '', 
          id: uuidv4()
        }
      }))
      this.postForm.reset();
    }
  }
}
