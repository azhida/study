<?php

namespace Utils;

class Log {

    private $log_file;

    public function __construct()
    {
        $log_file_name = 'error';
        $datetime = date('Y-m-d');
        $this->log_file = "./logs/{$log_file_name}-{$datetime}.log";
    }

    public function error($data)
    {
        if (is_array($data)) {
            $data = json_encode($data, true);
        }
        $datetime = date('Y-m-d H:i:s');
        $data =  "[{$datetime}] error: {$data}\r\n";
        file_put_contents($this->log_file, $data, FILE_APPEND);
    }
}