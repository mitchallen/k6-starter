import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  const response = http.get('https://example.com/');
  console.log(response.timings.duration);
  sleep(5);
}
